import { Link } from "react-router-dom";

const tenets = [
    { title: "Courtesy", description: "Courtesy is the foundation of all human relationships. It involves showing respect and consideration for others, and it is essential for creating a harmonious and peaceful society." },
    { title: "Humility", description: "Humility is the quality of being humble and modest. It involves recognizing our limitations and being open to learning from others. Humility is essential for personal growth and development." },
    { title: "Integrity", description: "Integrity is the quality of being honest and having strong moral principles. It involves doing the right thing, even when no one is watching. Integrity is essential for building trust and credibility." },
    { title: "Perseverance", description: "Perseverance is the quality of continuing to work towards a goal despite obstacles and setbacks. It involves determination, resilience, and a willingness to keep trying even when things get tough." },
    { title: "Self-Control", description: "Self-control is the ability to regulate our thoughts, emotions, and behaviors. It involves resisting temptation and making choices that align with our values and goals." },
    { title: "Indomitable Spirit", description: "Indomitable spirit is the quality of being unyielding and resilient in the face of adversity. It involves having a positive attitude, a strong sense of purpose, and the ability to overcome challenges." },
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
                <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white mb-6 leading-tight tracking-tight">
                    The Tenets of Kyuki-Do
                </h1>
            </div>

            {/* Tenets Section */}
            <div className="flex flex-col gap-6 w-full max-w-4xl">
                {tenets.map(({ title, description }) => (
                    <div 
                        key={title} 
                        className="
                            bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-300 dark:border-gray-700 
                            hover:border-yellow-400 transition-colors
                        "
                    >
                        <h2 className="text-3xl font-semibold">
                            <span className="text-yellow-500 dark:text-yellow-300 text-4xl font-bold tracking-[-.1em] mr-1">
                                {title.charAt(0)}
                            </span>
                            <span className="text-gray-800 dark:text-gray-300 font-medium">
                                {title.slice(1)}
                            </span>
                        </h2>
                        <hr className="border-t border-gray-300 dark:border-gray-700 my-4" />
                        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                            {description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
