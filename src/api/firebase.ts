import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, addDoc, deleteDoc, doc, onSnapshot, updateDoc, setDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

interface Event {
  date: string;
  title: string;
  time?: string;
}

interface EventWithId extends Event {
  id: string;
}

const firebaseConfig = {
  apiKey: "AIzaSyA8E3JH5VmBNtXJoUx9VVl8asN5ZToqZ2g",
  authDomain: "qmavite.firebaseapp.com",
  projectId: "qmavite",
  storageBucket: "qmavite.firebasestorage.app",
  messagingSenderId: "131758071430",
  appId: "1:131758071430:web:fe90b0b97a35d923d17b07",
  measurementId: "G-1YRF1PZ8WJ"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

const signUpUser = async (email: string, password: string, displayName?: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  if (displayName) {
    await updateProfile(userCredential.user, { displayName });
  }
  return userCredential.user;
};

const signInUser = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

export const updateUserProfile = async (displayName: string, photoURL?: string) => {
  if (auth.currentUser) {
    await updateProfile(auth.currentUser, { displayName, photoURL });
  }
};

const signOutUser = () => {
  return signOut(auth);
};

const listenAuthState = (callback: (user: any) => void) => {
  onAuthStateChanged(auth, callback);
};

const getUserData = async (uid: string) => {
  const userDoc = await getDoc(doc(db, 'users', uid));
  if (userDoc.exists()) {
    return userDoc.data();
  }
  return null;
};

const setUserData = async (uid: string, data: object) => {
  await setDoc(doc(db, 'users', uid), data, { merge: true });
};

const updateUserData = async (uid: string, data: object) => {
  await updateDoc(doc(db, 'users', uid), data);
};

const uploadProfilePicture = async (uid: string, file: File) => {
  const storageRef = ref(storage, `profilePictures/${uid}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};

export { uploadProfilePicture, getUserData, setUserData, updateUserData, db, collection, getDocs, addDoc, deleteDoc, doc, onSnapshot, updateDoc, auth, signUpUser, signInUser, signOutUser, listenAuthState, storage, onAuthStateChanged, getAuth };
export type { Event, EventWithId };
