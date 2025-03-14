import { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import judoThrows from "./judoThrows";

const groupNames: Record<number, string> = {
    1: 'Dai-ikkyo',
    2: 'Dai-nikyo',
    3: 'Dai-sankyo',
    4: 'Dai-yonkyo',
    5: 'Dai-gokyo',
};

export function Judo() {
    const groupedThrows = judoThrows.reduce<Record<number, typeof judoThrows>>((acc, throwItem) => {
        if (!acc[throwItem.group]) acc[throwItem.group] = [];
        acc[throwItem.group].push(throwItem);
        return acc;
    }, {});

    const [openGroup, setOpenGroup] = useState<number | null>(null);
    const [openThrow, setOpenThrow] = useState<string | null>(null);

    // Automatically open the first group when the page loads
    useEffect(() => {
        const firstGroup = Object.keys(groupedThrows)[0];
        if (firstGroup) {
            setOpenGroup(Number(firstGroup));
        }
    }, []);

    const toggleGroup = (group: number) => {
        setOpenGroup(group);
        setOpenThrow(null);
    };

    const toggleThrow = (throwName: string) => {
        setOpenThrow(openThrow === throwName ? null : throwName);
    };

    return (
        <section
            className="flex flex-col items-center justify-start gap-12 py-20 px-8 custom-bg custom-dark transition-colors duration-300"
            style={{ minHeight: 'calc(100vh - 5rem)' }}
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
                <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-4 leading-tight transition-colors">
                    Judo Throws
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed transition-colors">
                    Explore different Judo throwing techniques grouped by type.
                </p>
            </div>

            {/* Intro Section */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 max-w-4xl text-center">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    The <strong>Gokyo no Waza</strong> (five sets of techniques) is the standard syllabus of Judo throwing techniques originated in 1895 at the Kodokan in Tokyo, Japan. 
                    From 1920 to 1982, the Kodokan Gokyo no Waza was made up of the 40 throws in 5 groups as shown below. In 1982, additional techniques 
                    (eight reinstated techniques and Shinmeisho No Waza) were added to recognize standard Judo throws that were not part of the Gokyo. 
                    Click on a throw to see a video demonstration of how to do each technique.
                </p>
            </div>

            {/* Group Headers */}
            <div className="flex flex-col w-full max-w-6xl space-y-6">
                {Object.entries(groupedThrows).map(([group, throws]) => (
                    <div key={group} className="w-full">
                        {/* Group Header */}
                        <button
                            onClick={() => toggleGroup(Number(group))}
                            className={`w-full flex items-center justify-between px-8 py-6 rounded-xl shadow-md text-left transition-colors ${
                                openGroup === Number(group)
                                    ? "bg-yellow-100 dark:bg-yellow-800 border-l-4 border-yellow-400"
                                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                            }`}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-yellow-400">
                                {groupNames[Number(group)]} (Group {group})
                            </h2>
                            <span className="text-2xl text-gray-500 dark:text-gray-400">
                                {openGroup === Number(group) ? '▲' : '▼'}
                            </span>
                        </button>

                        {/* Show throws when group is open */}
                        {openGroup === Number(group) && (
                            <div className="mt-4 space-y-4">
                                {throws.map((throwItem) => (
                                    <div key={throwItem.throwName}>
                                        {/* Throw Header with Image */}
                                        <button
                                            onClick={() => toggleThrow(throwItem.throwName)}
                                            className="w-full flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                        >
                                            {/* Throw Image */}
                                            <img 
                                                src={throwItem.imgUrl} 
                                                alt={throwItem.throwName} 
                                                className="w-16 h-16 object-cover rounded-lg border border-gray-300 dark:border-gray-700"
                                            />

                                            {/* Throw Name */}
                                            <span className="text-lg font-medium text-gray-700 dark:text-white">
                                                {throwItem.throwName}
                                            </span>

                                            <span className="ml-auto text-gray-500 dark:text-gray-400">
                                                {openThrow === throwItem.throwName ? '▲' : '▼'}
                                            </span>
                                        </button>

                                        {/* Show throw details when open */}
                                        {openThrow === throwItem.throwName && (
                                            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg mt-2 shadow-inner">
                                                {/* Description */}
                                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                                    {throwItem.description}
                                                </p>
                                                {/* Video */}
                                                <div className="relative w-full aspect-video">
                                                    <iframe
                                                        src={throwItem.videoUrl}
                                                        title={throwItem.throwName}
                                                        allowFullScreen
                                                        className="w-full h-full rounded-lg border border-gray-300 dark:border-gray-700"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
