interface FormFactsProps {
    facts: any;
}

export function FormFacts({ facts }: FormFactsProps) {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg p-8 w-full max-w-2xl mx-auto text-center transition-colors duration-300">
            {/* Number of Movements */}
            <div className="py-4 border-b border-gray-300 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400">
                    Number of Movements:
                </h3>
                <p className="text-3xl font-bold text-gray-800 dark:text-white">
                    {facts.moves}
                </p>
            </div>

            {/* Moves Definition */}
            {facts.movesDef && (
                <div className="py-4 border-b border-gray-300 dark:border-gray-700">
                    <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                        {facts.movesDef}
                    </p>
                </div>
            )}

            {/* Ready Position */}
            {facts.ready && (
                <div className="py-4 border-b border-gray-300 dark:border-gray-700">
                    <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400">
                        Ready Position:
                    </h3>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">
                        {facts.ready}
                    </p>
                </div>
            )}

            {/* Large Definition */}
            {facts.largeDef && (
                <div className="py-4 border-b border-gray-300 dark:border-gray-700">
                    <blockquote
                        className="text-2xl italic font-semibold text-gray-700 dark:text-gray-300 border-l-4 pl-4"
                        style={{ borderColor: '#FDE68A' }}
                    >
                        "{facts.largeDef}"
                    </blockquote>
                </div>
            )}

            {/* Meaning */}
            <div className="py-4 border-b border-gray-300 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400">
                    Meaning:
                </h3>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                    {facts.meaning}
                </p>
            </div>

            {/* Small Definition */}
            {facts.smallDef && (
                <div className="py-4 border-b border-gray-300 dark:border-gray-700">
                    <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                        {facts.smallDef}
                    </p>
                </div>
            )}

            {/* Month */}
            <div className="py-4">
                <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400">
                    Month:
                </h3>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                    {facts.month}
                </p>
            </div>
        </div>
    );
}
