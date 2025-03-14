import { Link } from "react-router-dom";
import belts from './belts';

export function Forms() {
    const rankForms = belts.filter(belt => belt.id !== 0);
    const additionalForms = belts.filter(belt => belt.id === 0);

    return (
        <section className="flex flex-col items-center justify-start gap-12 py-20 px-8 custom-bg custom-dark transition-colors duration-300"
        style= {{minHeight: 'calc(100vh - 5rem)'}}
        >
            {/* Back to Resources Link */}
            <Link 
                to="/resources" 
                className="text-blue-500 dark:text-blue-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
            >
                <h1 className="text-2xl font-semibold tracking-wide">
                    ← Back to Resources
                </h1>
            </Link>

            {/* Page Title */}
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white mb-4 leading-tight transition-colors">
                    Forms Page
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed transition-colors">
                    Explore the different Forms of Kyuki-Do. Click on a belt below to learn more.
                </p>

                {/* Rank Forms Section */}
                <div>
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 mt-12 tracking-tight transition-colors">
                        Rank Forms
                    </h1>
                    {/* Belt Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
                        {rankForms.map((belt, index) => (
                            <Link
                                key={index}
                                to={`/resources/info/forms/${belt.id}`}
                                className="w-full transition-transform duration-300 ease-in-out hover:scale-105"
                            >
                                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl border border-gray-300 dark:border-gray-700 hover:border-yellow-400 transition-colors flex flex-col items-center justify-center">
                                    {/* Belt Image */}
                                    <img
                                        src={belt.image}
                                        alt={`Kyuki-Do Belt - Rank ${index + 1}`}
                                        className="object-cover rounded-lg w-full h-44 border border-gray-300 dark:border-gray-700 transition-colors"
                                        loading="lazy"
                                    />

                                    {/* Belt Form Name */}
                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-yellow-400 mt-4 tracking-wide transition-colors">
                                        {belt.form}
                                    </h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                {/* End of Rank Forms Section */}

                {/* Additional Forms Section */}
                <div className="mt-12">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 tracking-tight transition-colors">
                        Additional Forms
                    </h1>
                    {/* Additional Forms Content */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
                        {additionalForms.map((belt, index) => (
                            <Link
                                key={index}
                                to={`/resources/info/forms/${belt.id}`}
                                className="w-full transition-transform duration-300 ease-in-out hover:scale-105"
                            >
                                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl border border-gray-300 dark:border-gray-700 hover:border-yellow-400 transition-colors flex flex-col items-center justify-center">

                                    {/* Belt Form Name */}
                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-yellow-400 tracking-wide transition-colors">
                                        {belt.form}
                                    </h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                {/* End of Additional Forms Section */}
            </div>
        </section>
    );
}
