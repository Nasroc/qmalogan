import React from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, 
  // BellIcon 
} from '@heroicons/react/24/outline';
import logo from './qma-logo.png'; // Adjust the path to your logo
import SignInModal from '../SignIn';
import SignOutConfirmation from '../SignOutConfirmation'; // Add this line
import { auth, onAuthStateChanged, getUserData, onSnapshot, doc, db } from '../../api/firebase';
import { useEffect, useState } from 'react';

interface NavBarProps {
  isSignedIn: boolean;
  onSignInSuccess: (role:string) => void; // Add this line
  onSignOut: () => void; // Add this line
}

const NavBar: React.FC<NavBarProps> = ({isSignedIn, onSignInSuccess, onSignOut }) => {
  const [showSignInModal, setShowSignInModal] = React.useState(false);
  const [showSignOutConfirmation, setShowSignOutConfirmation] = React.useState(false); // Add this line
  const [profilePicUrl, setProfilePicUrl] = useState<string | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // Removed unused userId state

  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    if (!user?.uid) return;

    const unsubscribe = onSnapshot(doc(db, "users", user.uid), (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setProfilePicUrl(data.profilePic || null);
      }
    });

    return () => unsubscribe();
  }, [user?.uid]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);
  

 // ✅ Fetch user data from Firebase
 const fetchUserData = async (userId: string) => {
  try {
    const userData = await getUserData(userId);
    if (userData) {
      setFirstName(userData.firstName || "");
      setLastName(userData.lastName || "");
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
      // Removed setting userId as it is no longer used
      await fetchUserData(user.uid);
    } else {
      // Removed clearing userId as it is no longer used
    }
  });

  // Clean up the listener when component unmounts
  return () => unsubscribe();
}, []);

  const handleSignInClick = () => {
    setShowSignInModal(true);
  };

  const handleSignOutClick = () => {
    setShowSignOutConfirmation(true);
  };

  const handleSignOutConfirm = () => {
    onSignOut();
    setShowSignOutConfirmation(false);
  };

  const QuestionMarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
    </svg>
  );

  return (
    <Disclosure as="nav" className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-18 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:focus:ring-white transition">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </Disclosure.Button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start content-center">
            <div className="flex shrink-0 items-center content-center sm:justify-center">
              <img
                alt="Your Company"
                src={logo}
                className="w-25 pt-8 z-1"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block content-center">
              <div className="flex space-x-4">
                <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                  Dashboard
                </Link>
                {/* <Link to="/team" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                  Team
                </Link> */}
                <Link to="/resources" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                  Resources
                </Link>
                <Link to="/events-schedule" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                  Events & Schedule
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
              type="button"
              className="relative p-1 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:focus:ring-white transition"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button> */}
            {/* Display user's first name if signed in */}
            {isSignedIn && (
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-100">
                    {firstName} {lastName}
                  </span>
                )}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 overflow-hidden">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                {isSignedIn && profilePicUrl ? (
                  <img 
                    alt="User Profile" 
                    src={profilePicUrl} 
                    className="h-full w-full object-cover" // Image scales to the container size
                  />
                ) : (
                  <QuestionMarkIcon />
                )}
              </MenuButton>

                {isSignedIn && (
                  <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 border border-white dark:border-gray-800" />
                )}
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-20 mt-2 w-48 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black/5 dark:ring-white/10 focus:outline-none transition-transform origin-top-right scale-95 opacity-0 data-open:scale-100 data-open:opacity-100"
              >
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/settings"
                      className={`block px-4 py-2 text-sm ${
                        active ? 'bg-gray-200 dark:bg-gray-700' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      Settings
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {isSignedIn ? (
                    <button
                      onClick={handleSignOutClick}
                      className="block px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition w-full"
                    >
                      Sign Out
                    </button>
                  ) : (
                    <button
                      onClick={handleSignInClick}
                      className="block px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition w-full"
                    >
                      Sign In
                    </button>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>

          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <Link to="/dashboard" className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            Dashboard
          </Link>
          {/* <Link to="/team" className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            Team
          </Link> */}
          <Link to="/resources" className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            Resources
          </Link>
          <Link to="/events-schedule" className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            Events & Schedule
          </Link>
        </div>
      </Disclosure.Panel>

      <SignInModal show={showSignInModal} onClose={() => setShowSignInModal(false)} onSignInSuccess={onSignInSuccess} />
      <SignOutConfirmation
        show={showSignOutConfirmation}
        onClose={() => setShowSignOutConfirmation(false)}
        onConfirm={handleSignOutConfirm}
      />
    </Disclosure>
  );
};

export default NavBar;