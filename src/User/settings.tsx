"use client";

import React, { useState, useEffect, useCallback } from "react";
import { updateUserProfile, getUserData, setUserData, uploadProfilePicture, auth, onAuthStateChanged } from "../api/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import getCroppedImg from '../utils/cropImage'; // Helper function to crop image
import { Slider } from '@mui/material';
import Cropper from 'react-easy-crop';

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
  // Removed unused profilePic state
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

       if (userData.profilePic) {
         setProfilePicUrl(userData.profilePic);
       }
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

   // Clean up the listener when component unmounts
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
    if (!imageSrc || !crop) return;
  
    try {
      // ✅ Generate the cropped image
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      setCroppedImage(croppedImage);
  
      if (uid) {
        const file = await fetch(croppedImage).then((res) => res.blob());
        const profilePicUrl = await uploadProfilePicture(uid, new File([file], "profile.png", { type: "image/png" }));
        setProfilePicUrl(profilePicUrl); // ✅ Update state in NavBar
        await setUserData(uid, { profilePic: profilePicUrl });
  
        // ✅ Hide cropper and preview after saving
        setImageSrc(null);
        setCrop({ x: 0, y: 0 });
        setZoom(1);
        setCroppedImage(null); // ✅ Remove preview
      }
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      alert("Failed to upload profile picture.");
    }
  };

  // ✅ Handle form submission and update data in Firebase
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
      // Update user data in Firestore
      await setUserData(uid, {
        firstName,
        lastName,
        email,
        contactEmail,
        agreeToEmails,
        profilePic: profilePicUrl,
      });

      // Update password if provided
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
        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">
          Account Settings
        </h2>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Profile Section */}
            <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Profile
            </h3>
            <div className="flex items-center gap-6">
                {/* Show cropped image OR uploaded image */}
                {croppedImage ? (
                <img
                    src={croppedImage}
                    alt="Profile"
                    className="h-24 w-24 rounded-full object-cover border border-gray-300 dark:border-gray-600"
                />
                ) : profilePicUrl ? (
                <img
                    src={profilePicUrl}
                    alt="Profile"
                    className="h-24 w-24 rounded-full object-cover border border-gray-300 dark:border-gray-600"
                />
                ) : (
                <div className="h-24 w-24 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">No Image</span>
                </div>
                )}

                {/* Upload File */}
                <div className="flex flex-col gap-2">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="
                    text-sm text-gray-500 dark:text-gray-400
                    file:mr-4 file:py-2 file:px-4 file:rounded-md
                    file:border-0 file:bg-blue-500 dark:file:bg-blue-600
                    file:text-white hover:file:bg-blue-600 dark:hover:file:bg-blue-500
                    cursor-pointer transition
                    "
                />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Upload a 256x256 image or larger.
                </p>
                </div>
            </div>

                {/* ✅ Cropper */}
                {imageSrc && (
                <div className="relative h-[350px] bg-gray-100 mt-4 mb-10 overflow-hidden rounded-lg">
                    <Cropper
                    image={imageSrc}
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                    />
                    <Slider
                    value={zoom}
                    onChange={(_, value) => setZoom(value as number)}
                    min={1}
                    max={3}
                    step={0.1}
                    className="mt-2"
                    />
                    {/* ✅ Fix button placement */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <button
                        onClick={handleUpload}
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Save Crop
                    </button>
                    </div>
                </div>
                )}


            {/* ✅ Preview */}
            {croppedImage && (
                <img
                src={croppedImage}
                alt="Cropped"
                className="w-24 h-24 mt-4 rounded-full"
                />
            )}
            </div>

          {/* Personal Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Email
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                  Sign-In Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john.doe@example.com"
                  className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                  Contact Email
                </label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="contact@example.com"
                  className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Password Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Password
            </h3>
            <div className="space-y-6">
              {["current", "new", "confirm"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                    {field.charAt(0).toUpperCase() + field.slice(1)} Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword[field as keyof typeof showPassword] ? "text" : "password"}
                      value={
                        field === "current"
                          ? currentPassword
                          : field === "new"
                          ? newPassword
                          : confirmPassword
                      }
                      onChange={(e) =>
                        field === "current"
                          ? setCurrentPassword(e.target.value)
                          : field === "new"
                          ? setNewPassword(e.target.value)
                          : setConfirmPassword(e.target.value)
                      }
                      placeholder="••••••••"
                      className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500"
                    />
                    <FontAwesomeIcon
                      icon={showPassword[field as keyof typeof showPassword] ? faEyeSlash : faEye}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                      onClick={() => togglePasswordVisibility(field)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Email Notifications */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={agreeToEmails}
              onChange={(e) => setAgreeToEmails(e.target.checked)}
              className="h-5 w-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
            />
            <label className="text-sm text-gray-700 dark:text-gray-400">
              I agree to receive email notifications
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
