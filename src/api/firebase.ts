import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore'; // Added updateDoc for editing events
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'; // Import auth methods

// Define the structure of an event
interface Event {
  date: string;
  title: string;
  time?: string;
}

// Extend the Event interface to include an ID for Firestore documents
interface EventWithId extends Event {
  id: string;
}

// Firebase configuration (copy this from your Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyA8E3JH5VmBNtXJoUx9VVl8asN5ZToqZ2g",
  authDomain: "qmavite.firebaseapp.com",
  projectId: "qmavite",
  storageBucket: "qmavite.firebasestorage.app",
  messagingSenderId: "131758071430",
  appId: "1:131758071430:web:fe90b0b97a35d923d17b07",
  measurementId: "G-1YRF1PZ8WJ"
};

// Initialize Firebase (only if not already initialized)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore and Authentication
const db = getFirestore(app);
const auth = getAuth(app);

// Firebase Auth Methods (for Sign-In, Sign-Up, and Sign-Out)
const signUpUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Optionally, you can save additional user info to Firestore here (e.g., role)
    return userCredential.user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

const signInUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

const signOutUser = () => {
  return signOut(auth);
};

const listenAuthState = (callback: (user: any) => void) => {
  onAuthStateChanged(auth, callback);
};

// Export necessary functions and types for use in other parts of your app
export { db, collection, getDocs, addDoc, deleteDoc, doc, onSnapshot, updateDoc, auth, signUpUser, signInUser, signOutUser, listenAuthState };
export type { Event, EventWithId };