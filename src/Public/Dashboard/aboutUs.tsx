import dojoBG from './DojoBG.JPG';

const stats = [
  { name: 'Current Students', value: '200+' },
  { name: 'Coaches', value: '3' },
  { name: 'Days Per Week', value: '4' },
  { name: 'Attendance', value: 'Unlimited' },
];

export function AboutUs() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 h-[calc(50vh-4rem)] min-h-[50rem]">
      {/* Background Image */}
      <img
        src={dojoBG}
        alt="Dojo Background"
        className="absolute inset-0 -z-10 size-full object-cover object-center brightness-50 blur-sm overflow-hidden"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {/* Header */}
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl leading-tight">
            Join Us Today
          </h2>
          <p className="mt-6 text-lg font-medium text-gray-300 sm:text-xl/8 leading-relaxed">
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
                className="flex flex-col items-start gap-2 p-6 bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-700"
              >
                <dt className="text-base font-medium text-gray-400">
                  {stat.name}
                </dt>
                <dd className="text-4xl font-bold text-white">
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
