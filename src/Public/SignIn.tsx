import React, { useState } from 'react';
import logo from './qma-logo.png';

interface SignInModalProps {
    show: boolean;
    onClose: () => void;
    onSignInSuccess: () => void; // Passes user role on success
}

const authorizedUsers = [
    { email: 'admin@example.com', password: 'adminpass', role: 'admin' },
    { email: 'carsonbenedetto23@gmail.com', password: 'Franklin2880', role: 'admin' },
    { email: 'user2@example.com', password: 'password2', role: 'user' },
];

const SignInModal: React.FC<SignInModalProps> = ({ show, onClose, onSignInSuccess }) => {
    const [error, setError] = useState<string | null>(null);

    if (!show) {
        return null;
    }

    const checkUserRole = (email: string, password: string) => {
        const user = authorizedUsers.find(
            (user) => user.email === email && user.password === password
        );
        return user ? user.role : null;
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        const role = checkUserRole(email, password);

        if (role) {
            onSignInSuccess(); // Passes the user role to the parent component
            onClose();
        } else {
            setError('Invalid email or password');
        }
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
                        Sign in to your account
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
                                <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
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
                        <div>
                            <button
                                type="submit"
                                className="w-full rounded-md bg-indigo-600 px-3 py-2 text-white font-medium hover:bg-indigo-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignInModal;
