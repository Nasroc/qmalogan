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
        <section className="flex flex-col gap-10 items-center justify-start pt-20 h-full w-full custom-bg custom-dark">
            <h1 className="text-5xl font-bold text-white mb-6 sr-only">Resources</h1>
            {resources.map((resource) => (
                <Link
                    key={resource.name}
                    to={`/resources/${resource.name}`}
                    className="w-full sm:w-3/4 max-w-300 text-white"
                >
                    <div className="bg-gray-900 p-8 rounded-xl shadow-xl hover:shadow-2xl hover:bg-gray-800 hover:bg-gray-800 hover:scale-105 transition-transform duration-300 ease-in-out">

                        <h2 className="text-5xl font-bold text-gray-100 text-center capitalize">
                            {resource.name}
                        </h2>
                        <div className="text-xl text-gray-200 mt-4 text-center leading-relaxed">
                            {resource.description.split('\n').map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                    </div>
                </Link>
            ))}
        </section>
    );
}
