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
                <button key={section.id} onClick={() => handleScroll(section.id)}>
                    {section.label}
                </button>
            ))}
        </nav>
    );
};

export default ScrollNav;