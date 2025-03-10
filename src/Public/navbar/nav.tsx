import React from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, BellIcon } from '@heroicons/react/24/outline';
import logo from './qma-logo.png'; // Adjust the path to your logo
import SignInModal from '../SignIn';
import SignOutConfirmation from '../SignOutConfirmation'; // Add this line

interface NavBarProps {
  isSignedIn: boolean;
  onSignInSuccess: (role:string) => void; // Add this line
  onSignOut: () => void; // Add this line
}

const NavBar: React.FC<NavBarProps> = ({isSignedIn, onSignInSuccess, onSignOut }) => {
  const [showSignInModal, setShowSignInModal] = React.useState(false);
  const [showSignOutConfirmation, setShowSignOutConfirmation] = React.useState(false); // Add this line


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
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-18 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
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
                <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  Dashboard
                </Link>
                <Link to="/team" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  Team
                </Link>
                <Link to="/resources" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  Resources
                </Link>
                <Link to="/events-schedule" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  Events & Schedule
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  {isSignedIn ? (
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                  ) : (
                  <QuestionMarkIcon />
                  )}
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                    {isSignedIn ? (
                      <button
                        onClick={handleSignOutClick}
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden w-full text-left"
                      >
                        Sign out
                      </button>
                    ) : (
                      <button
                        onClick={handleSignInClick}
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden w-full text-left"
                      >
                        Sign in
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
          <Link to="/dashboard" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
            Dashboard
          </Link>
          <Link to="/team" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
            Team
          </Link>
          <Link to="/resources" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
            Resources
          </Link>
          <Link to="/events-schedule" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
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