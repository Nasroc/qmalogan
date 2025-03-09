import { Link } from 'react-router-dom';

const resources = [
    {
        name: 'forms',
        description:
            'Go to the forms page so you can study and learn the different Forms of Kyuki-Do.',
    },
    {
        name: 'tenets',
        description:
            'There are SIX different Tenets of Kyuki-do.\nGo to the Tenets Page to learn the different tenets and how we can exhibit them.',
    },
    {
        name: 'pledges',
        description:
            'Along with our Tenets, there are also FIVE pledges that students must make.\nGo to the Pledges page to learn the different pledges.',
    },
    {
        name: 'judo',
        description:
            'Judo is a wonderful martial art that we like to participate in occasionally.\nIn class, we will talk about different judo throws, using their Japanese names.\nTo help with recognizing these throws and their names, go to the Judo page to learn them.',
    },
];

export function Resources() {
    return (
        <section className="flex flex-col gap-8 items-center justify-start pt-20 h-full w-full">
            {/* Header */}
            <h2 className="text-4xl font-bold tracking-tight text-white mb-10">
                Resources
            </h2>

            {/* Resource Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl">
                {resources.map((resource) => (
                    <Link
                        key={resource.name}
                        to={`/resources/${resource.name}`}
                        className="w-full transition-transform duration-300 ease-in-out hover:scale-105"
                    >
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl border border-gray-700 hover:border-blue-500 transition-colors h-[250px] flex flex-col items-center justify-center text-center">
                            {/* Resource Name */}
                            <h3 className="text-3xl font-semibold text-white capitalize mb-2">
                                {resource.name}
                            </h3>

                            {/* Description */}
                            <div className="text-lg text-gray-400 leading-relaxed overflow-hidden line-clamp-4">
                                {resource.description.split('\n').map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
