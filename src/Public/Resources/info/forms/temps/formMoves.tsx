interface FormDetailsProps {
  readyPosition: string;
  pathImg: string;
  steps: string[];
  paro: string;
}

export function FormMoves({ readyPosition, pathImg, steps, paro }: FormDetailsProps) {
  return (
    <section className="flex flex-col items-center justify-start gap-12 py-20 px-8 transition-colors duration-300">
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl w-full max-w-5xl transition-colors space-y-8">
        {/* Ready Position */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Ready Position:
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {readyPosition}
          </p>
        </div>

        {/* Form Movements Image */}
        <div className="relative p-4">
          <img
            src={pathImg}
            alt="Form Movements"
            className="h-auto mx-auto rounded-xl transition-all dark:invert"
          />
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => {
            const isKihap = step.includes("Kihap");

            return (
              <div
                key={index}
                className={`p-4 rounded-xl border transition-all shadow-md
                  ${isKihap
                    ? "bg-yellow-100 dark:bg-yellow-900/25 border-yellow-300 dark:border-yellow-700"
                    : "bg-gray-100 dark:bg-gray-900 border-gray-300 dark:border-gray-700"}
                  hover:scale-105 hover:shadow-lg
                `}
              >
                <span
                  className={`font-semibold mr-2 ${
                    isKihap
                      ? "text-yellow-700 dark:text-yellow-400"
                      : "text-gray-800 dark:text-gray-300"
                  }`}
                >
                  Step {index + 1}:
                </span>
                <span className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  {step.split(" ").map((word, i) =>
                    word.includes("Kihap") ? (
                      <span key={i} className="font-bold text-red-600 dark:text-red-400">
                        {word}{" "}
                      </span>
                    ) : (
                      `${word} `
                    )
                  )}
                </span>
              </div>
            );
          })}
        </div>

        {/* Paro */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Paro:
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {paro}
          </p>
        </div>
      </div>
    </section>
  );
}
