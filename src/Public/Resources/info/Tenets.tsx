import { Link } from "react-router-dom";

const tenets = [
    { letter: 'C', title: 'Courtesy', description: 'Courtesy is the foundation of all human relationships. It involves showing respect and consideration for others, and it is essential for creating a harmonious and peaceful society.' },
    { letter: 'H', title: 'Humility', description: 'Humility is the quality of being humble and modest. It involves recognizing our limitations and being open to learning from others. Humility is essential for personal growth and development.' },
    { letter: 'I', title: 'Integrity', description: 'Integrity is the quality of being honest and having strong moral principles. It involves doing the right thing, even when no one is watching. Integrity is essential for building trust and credibility.' },
    { letter: 'P', title: 'Perseverance', description: 'Perseverance is the quality of continuing to work towards a goal despite obstacles and setbacks. It involves determination, resilience, and a willingness to keep trying even when things get tough.' },
    { letter: 'S', title: 'Self-Control', description: 'Self-control is the ability to regulate our thoughts, emotions, and behaviors. It involves resisting temptation and making choices that align with our values and goals.' },
    { letter: 'I', title: 'Indomitable Spirit', description: 'Indomitable spirit is the quality of being unyielding and resilient in the face of adversity. It involves having a positive attitude, a strong sense of purpose, and the ability to overcome challenges.' },
];

export function Tenets() {
    return (
        <section className="flex flex-col items-center gap-12 py-20 px-8 custom-bg custom-dark transition-colors"
            style={{ minHeight: 'calc(100vh - 5rem)' }}
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
                <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white mb-4 leading-tight">
                    The Tenets of Kyuki-Do
                </h1>
            </div>

            {/* Tenets Section */}
            <div className="flex flex-col gap-8 w-full max-w-4xl">
                {tenets.map(({ letter, title, description }) => (
                    <div 
                        key={title}
                        className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-300 dark:border-gray-700 hover:border-yellow-400 transition-colors"
                    >
                        <h2 className="text-3xl font-bold">
                            <span className="text-yellow-500 dark:text-yellow-300 text-4xl font-extrabold tracking-tight mr-0.5">
                                {letter}
                            </span>
                            <span className="text-gray-800 dark:text-gray-200">
                                {title.slice(1)}
                            </span>
                        </h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                            {description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
