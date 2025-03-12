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
        <section 
            className="flex flex-col items-center justify-center py-16 w-full custom-bg custom-dark transition-colors duration-300" 
            style={{ minHeight: 'calc(100vh - 5rem)' }}
        >
            {/* Header */}
            <h2 className="text-5xl font-bold tracking-tight text-gray-800 dark:text-white mb-16 transition-colors">
                Resources
            </h2>

            {/* Resource Cards */}
            <div className="flex flex-col gap-8 w-full max-w-4xl">
                {resources.map((resource) => (
                    <Link
                        key={resource.name}
                        to={`/resources/info/${resource.name}`}
                        className="w-full transition-transform duration-300 ease-in-out hover:scale-105"
                    >
                        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl border border-gray-300 dark:border-gray-700 hover:border-yellow-400 transition-colors h-[300px] flex flex-col items-center justify-center text-center">
                            {/* Resource Name */}
                            <h3 className="text-4xl font-semibold text-gray-800 dark:text-white capitalize mb-4">
                                {resource.name}
                            </h3>

                            {/* Description */}
                            <div className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed overflow-hidden line-clamp-4">
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
