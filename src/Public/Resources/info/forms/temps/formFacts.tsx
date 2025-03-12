interface FormFactsProps {
    facts: any;
}

export function FormFacts({ facts }: FormFactsProps) {
    return (
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-6 w-full max-w-3xl mx-auto text-center transition-colors duration-300 space-y-4">
            {/* Number of Movements + Moves Definition */}
            {facts.moves && (
                <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-gray-100 dark:bg-gray-900 space-y-1">
                    <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400">
                        Number of Movements:
                    </h3>
                    <p className="text-3xl font-bold text-gray-800 dark:text-white">
                        {facts.moves}
                    </p>
                    {facts.movesDef && (
                        <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 leading-relaxed">
                            {facts.movesDef}
                        </p>
                    )}
                </div>
            )}

            {/* Ready Position */}
            {facts.ready && (
                <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-gray-100 dark:bg-gray-900 space-y-1">
                    <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400">
                        Ready Position:
                    </h3>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">
                        {facts.ready}
                    </p>
                </div>
            )}

            {/* Large Definition */}
            {facts.largeDef && (
                <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-gray-100 dark:bg-gray-900 space-y-1">
                    <blockquote className="text-2xl italic font-semibold text-gray-700 dark:text-gray-400 border-l-4 pl-3 border-yellow-300 dark:border-yellow-500">
                        "{facts.largeDef}"
                    </blockquote>
                </div>
            )}

            {/* Meaning */}
            {facts.meaning && (
                <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-gray-100 dark:bg-gray-900 space-y-1">
                    <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400">
                        Meaning:
                    </h3>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">
                        {facts.meaning}
                    </p>
                </div>
            )}

            {/* Small Definition */}
            {facts.smallDef && (
                <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-gray-100 dark:bg-gray-900 space-y-1">
                    <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                        {facts.smallDef}
                    </p>
                </div>
            )}

            {/* Month */}
            {facts.month && (
                <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-gray-100 dark:bg-gray-900 space-y-1">
                    <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400">
                        Month:
                    </h3>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">
                        {facts.month}
                    </p>
                </div>
            )}
        </div>
    );
}
