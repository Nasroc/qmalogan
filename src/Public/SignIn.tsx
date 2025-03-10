import React, { useState } from 'react';
import { signInUser, signUpUser } from '../api/firebase'; // Import Firebase Auth methods
import logo from './qma-logo.png';

interface SignInModalProps {
  show: boolean;
  onClose: () => void;
  onSignInSuccess: (role: string) => void; // Passes user role on success
}

const SignInModal: React.FC<SignInModalProps> = ({ show, onClose, onSignInSuccess }) => {
  const [error, setError] = useState<string | null>(null);
  const [newUserMode, setNewUserMode] = useState(false); // Toggle for adding new users
  const [passcode, setPasscode] = useState<string>(''); // State to store the passcode input

  if (!show) {
    return null;
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (newUserMode) {
      // Sign-up logic with special passcode
      try {
        // Determine the role based on the passcode
        const role = passcode === 'nemo' ? 'admin' : 'user';
        
        await signUpUser(email, password);
        onSignInSuccess(role); // Pass the role to the parent component
        onClose();
      } catch (error) {
        setError('Error creating new account.');
      }
    } else {
      // Sign-in logic
      try {
        await signInUser(email, password);
        onSignInSuccess('user'); // Default to 'user' role, can be adjusted
        onClose();
      } catch (error) {
        setError('Invalid email or password');
      }
    }
  };

  const toggleNewUserMode = () => {
    setNewUserMode(!newUserMode);
    setError(null); // Clear errors when switching modes
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src={logo}
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-4 text-center text-2xl font-bold text-gray-900">
            {newUserMode ? 'Create a New Account' : 'Sign in to your account'}
          </h2>
        </div>
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="text-red-500 text-sm">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                  Password
                </label>
                {!newUserMode && (
                  <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                )}
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-indigo-600 sm:text-sm"
              />
            </div>

            {newUserMode && (
              <div>
                <label htmlFor="passcode" className="block text-sm font-medium text-gray-900">
                  Special Passcode (for admin)
                </label>
                <input
                  id="passcode"
                  name="passcode"
                  type="text"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-indigo-600 sm:text-sm"
                  placeholder="Enter passcode"
                />
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-3 py-2 text-white font-medium hover:bg-indigo-500"
              >
                {newUserMode ? 'Create Account' : 'Sign in'}
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={toggleNewUserMode}
              className="text-indigo-600 hover:text-indigo-500"
            >
              {newUserMode ? 'Already have an account? Sign in' : 'Need an account? Create one'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
