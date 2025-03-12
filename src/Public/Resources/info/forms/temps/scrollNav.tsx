import React from 'react';

interface ScrollNavProps {
    sections: { id: string, label: string }[];
}

const ScrollNav: React.FC<ScrollNavProps> = ({ sections }) => {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav>
            {sections.map(section => (
                <button key={section.id} onClick={() => handleScroll(section.id)}
                className="max-w-3xl mx-4 items-center justify-center rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4 text-gray-800 dark:text-white hover:bg-yellow-500 hover:text-gray-800 transition-colors duration-200"
                >
                    {section.label}
                </button>
            ))}
        </nav>
    );
};

export default ScrollNav;