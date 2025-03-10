interface FormDetailsProps {
  readyPosition: string;
  pathImg: string;
  steps: string[];
}

export function FormMoves  ({ readyPosition, pathImg, steps }: FormDetailsProps) {
  return (
    <section className="flex flex-col items-center justify-start gap-12 py-20 px-8 bg-gray-100 dark:bg-gray-800 min-h-screen transition-colors duration-300">

      {/* Ready Position */}
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl border border-gray-300 dark:border-gray-700 shadow-lg w-full max-w-3xl transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Ready Position:
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
          {readyPosition}
        </p>
      </div>

      {/* SVG */}
      <img
        src={pathImg}
        alt="Form Movements"
        className="h-auto mx-auto mt-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 p-4 transition-all"
      />

      {/* Steps */}
      <div className="space-y-4 w-full max-w-3xl">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
          >
            <span className="font-semibold text-gray-800 dark:text-gray-300 mr-2">
              Step {index + 1}:
            </span>
            <span className="text-gray-700 dark:text-gray-400">{step}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
