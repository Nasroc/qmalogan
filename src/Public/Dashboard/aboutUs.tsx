import dojoBG from './DojoBG.JPG';

const stats = [
  { name: 'Current Students', value: '200+' },
  { name: 'Coaches', value: '3' },
  { name: 'Days Per Week', value: '4' },
  { name: 'Attendance', value: 'Unlimited' },
];

export function AboutUs() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-100 dark:bg-gray-900 py-24 sm:py-32 h-[calc(50vh-4rem)] min-h-[50rem] transition-colors duration-300">
      {/* Background Image + Conditional Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={dojoBG}
          alt="Dojo Background"
          className="size-full object-cover object-center brightness-75 dark:brightness-50 contrast-110"
        />
        {/* Blur + Gradient for Light Mode */}
        <div className="absolute inset-0 backdrop-blur-xs bg-gradient-to-b from-gray-200/60 to-gray-100/5 dark:hidden" />
        {/* Strong Gradient for Dark Mode */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent hidden dark:block" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {/* Header */}
          <h2 className="text-5xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-7xl leading-tight">
            Join Us Today
          </h2>
            <p className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-300 sm:text-xl/8 leading-relaxed">
            Here at Quantum, we strive to create a culture that values respect, integrity, and curiosity.
            We believe that our success is driven by our people, and we are committed to fostering an 
            inclusive environment where everyone can thrive.
            </p>
        </div>

        {/* Stats Section */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="
                  flex flex-col items-start gap-2 p-6 border border-gray-300 dark:border-gray-700 rounded-lg 
                  bg-gray-200 dark:bg-gray-800 transition-all duration-300 
                  lg:hover:scale-105 lg:hover:bg-gray-300 dark:lg:hover:bg-gray-700
                  active:bg-gray-300 dark:active:bg-gray-700 active:scale-100" 
              >
                <dt className="text-base font-medium text-gray-600 dark:text-gray-400">
                  {stat.name}
                </dt>
                <dd className="text-4xl font-bold text-gray-800 dark:text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
