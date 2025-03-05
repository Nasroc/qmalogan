import React from 'react';

interface SignOutConfirmationProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const SignOutConfirmation: React.FC<SignOutConfirmationProps> = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
        <h2 className="text-center text-2xl font-bold text-gray-900">
          Confirm Sign Out
        </h2>
        <p className="mt-4 text-center text-gray-700">
          Are you sure you want to sign out?
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={onConfirm}
            className="rounded-md bg-red-600 px-3 py-2 text-white font-medium hover:bg-red-500"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="rounded-md bg-gray-600 px-3 py-2 text-white font-medium hover:bg-gray-500"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignOutConfirmation;
