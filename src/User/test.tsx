"use client";

import React, { useState, useEffect, useCallback } from "react";
import { updateUserProfile, getUserData, setUserData, uploadProfilePicture, auth, onAuthStateChanged } from "../api/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Cropper from 'react-easy-crop';
import getCroppedImg from '../utils/cropImage'; // Helper function to crop image
import { Slider } from '@mui/material';

const Settings: React.FC = () => {
  const [uid, setUserId] = useState<string | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToEmails, setAgreeToEmails] = useState(false);
  const [profilePicUrl, setProfilePicUrl] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  // Cropping states
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  // ✅ Fetch user data from Firebase
  const fetchUserData = async (userId: string) => {
    try {
      const userData = await getUserData(userId);
      if (userData) {
        setFirstName(userData.firstName || "");
        setLastName(userData.lastName || "");
        setEmail(userData.email || "");
        setContactEmail(userData.contactEmail || "");
        setAgreeToEmails(userData.agreeToEmails || false);
        if (userData.profilePic) setProfilePicUrl(userData.profilePic);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // ✅ Listen for Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        await fetchUserData(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // ✅ Toggle password visibility
  const togglePasswordVisibility = (field: string) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field as keyof typeof prev],
    }));
  };

  // ✅ Handle file input and open cropper
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // ✅ Handle cropping changes
  const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  // ✅ Handle image upload after cropping
  const handleUpload = async () => {
    if (!uid || !imageSrc || !croppedAreaPixels) return;
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      setCroppedImage(croppedImage);

      // Upload cropped image to Firebase
      const file = await fetch(croppedImage).then(res => res.blob());
      const fileObject = new File([file], 'profile.jpg', { type: 'image/jpeg' });

      const profilePicUrl = await uploadProfilePicture(uid, fileObject);
      setProfilePicUrl(profilePicUrl);
      await setUserData(uid, { profilePic: profilePicUrl });

      console.log("Profile picture updated successfully");
    } catch (error) {
      console.error("Error uploading profile picture:", error);
    }
  };

  // ✅ Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!uid) {
      alert("User not logged in");
      return;
    }

    if (newPassword && newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await setUserData(uid, {
        firstName,
        lastName,
        email,
        contactEmail,
        agreeToEmails,
        profilePic: profilePicUrl,
      });

      if (newPassword) {
        await updateUserProfile(newPassword);
      }

      alert("Settings updated successfully!");
    } catch (error) {
      console.error("Error updating settings:", error);
      alert("Failed to update settings. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white dark:bg-gray-800 shadow-xl rounded-lg p-12">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">Account Settings</h2>

        {/* Cropper */}
        {imageSrc && (
          <div className="relative w-full h-64 bg-gray-100">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
            <Slider value={zoom} onChange={(e, value) => setZoom(value as number)} min={1} max={3} step={0.1} />
            <button onClick={handleUpload} className="bg-blue-500 text-white mt-2 px-4 py-2 rounded">
              Save Crop
            </button>
          </div>
        )}

        <input type="file" onChange={handleFileChange} className="my-4" />
        {croppedImage && <img src={croppedImage} alt="Cropped" className="w-24 h-24 rounded-full" />}
      </div>
    </div>
  );
};

export default Settings;
