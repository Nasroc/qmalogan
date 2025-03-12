import { formTech } from "../../formTech";

interface TechniqueProps {
    id: number;
}

export function FormTechniques({ id }: TechniqueProps) {
    const techniques = formTech.find((tech) => tech.id === id);

    if (!techniques) {
        return (
            <p className="text-gray-500 dark:text-gray-400">
                No techniques available
            </p>
        );
    }

    return (
        <section className="flex flex-col items-center justify-start gap-12 py-20 px-8 transition-colors duration-300">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg w-full max-w-5xl transition-colors space-y-8">
                {/* Render technique categories */}
                {Object.entries(techniques).map(([category, items]) => {
                    if (Array.isArray(items) && items.length > 0) {
                        return (
                            <div
                                key={category}
                                className="space-y-4 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md"
                            >
                                {/* Category Header */}
                                <h3 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 capitalize mb-4">
                                    {category.replace(/([A-Z])/g, ' $1').trim()}
                                </h3>

                                {/* Header Row */}
                                <div className="flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-700/50 rounded-md border-b border-gray-300 dark:border-gray-600">
                                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                                        English
                                    </span>
                                    <div className="flex flex-col items-end">
                                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                                            Korean
                                        </span>
                                        <span className="text-xs text-gray-500 dark:text-gray-500">
                                            (Hangul)
                                        </span>
                                    </div>
                                </div>

                                {/* Category Items */}
                                <ul className="space-y-2">
                                    {items.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex justify-between items-center p-4 rounded-md border bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                                        >
                                            <span className="font-medium text-gray-800 dark:text-gray-300">
                                                {item.english}
                                            </span>
                                            <div className="flex flex-col items-end">
                                                <span className="text-gray-600 dark:text-gray-400">
                                                    {item.korean}
                                                </span>
                                                <span className="text-sm text-gray-500 dark:text-gray-500">
                                                    {item.hangul}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </section>
    );
}
