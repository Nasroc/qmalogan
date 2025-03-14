import { Link } from "react-router-dom";

const pledges = [
    { number: "I", text: "I shall respect my instructor and all senior ranks." },
    { number: "II", text: "I shall conduct myself in a respectful manner." },
    { number: "III", text: "I shall respect the teachings of Kyuki-Do and never misuse them." },
    { number: "IV", text: "I shall always respect the rights of others." },
    { number: "V", text: "I shall strive for peace and camaraderie in the world." },
];

export function Pledges() {
    return (
        <section 
            className="flex flex-col items-center gap-12 py-20 px-8 custom-bg custom-dark transition-colors"
            style={{ minHeight: '75.2vh' }}
        >
            {/* Back to Resources Link */}
            <Link 
                to="/resources" 
                className="text-blue-500 dark:text-blue-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
            >
                <h1 className="text-2xl font-semibold tracking-wide">
                    ← Back to Resources
                </h1>
            </Link>

            {/* Page Title */}
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white mb-6 leading-tight tracking-tight">
                    Pledges of Kyuki-Do
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    The pledges reflect the principles and values of Kyuki-Do.
                </p>
            </div>

            {/* Pledges Section */}
            <div className="flex flex-col gap-6 w-full max-w-4xl">
                {pledges.map(({ number, text }) => (
                    <div 
                        key={number} 
                        className="
                            bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-300 dark:border-gray-700 
                            hover:border-yellow-400 transition-colors
                        "
                    >
                        <h2 className="text-2xl font-medium">
                            <span className="text-yellow-500 dark:text-yellow-300 text-3xl font-semibold tracking-tight mr-2">
                                {number}.
                            </span>
                            <span className="text-gray-800 dark:text-gray-300">
                                {text}
                            </span>
                        </h2>
                    </div>
                ))}
            </div>
        </section>
    );
}
