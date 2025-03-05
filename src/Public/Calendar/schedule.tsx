export function Schedule() {
    return (
        <section className="p-10 bg-gray-800 rounded-lg shadow-lg">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl sm:text-3xl font-semibold lg:text-4xl text-white">Weekly Schedule</h1>

                <hr className="my-6 border-gray-700" />

                <ul className="text-gray-300 space-y-20">
                    <li className="flex flex-col">
                        <strong className="text-lg sm:text-xl text-white">Monday:</strong>
                        <span className="ml-8 pt-4 text-base sm:text-lg">5:00 PM - Taekwondo / Kids (Under 12)</span>
                        <span className="ml-8 pt-4 text-base sm:text-lg">6:00 PM - Taekwondo / Adults (Over 12)</span>
                    </li>
                    <li className="flex flex-col">
                        <strong className="text-lg sm:text-xl text-white">Tuesday:</strong>
                        <span className="ml-8 pt-4 text-base sm:text-lg">4:00 PM - Little Tigers (Ages 4-5)</span>
                        <span className="ml-8 pt-4 text-base sm:text-lg">5:00 PM - Taekwondo Sparring / Kids (Under 12)</span>
                        <span className="ml-8 pt-4 text-base sm:text-lg">6:00 PM - Taekwondo Sparring / Adults (Over 12)</span>
                    </li>
                    <li className="flex flex-col">
                        <strong className="text-lg sm:text-xl text-white">Wednesday:</strong>
                        <span className="ml-8 pt-4 text-base sm:text-lg">5:00 PM - Taekwondo Forms / Kids (Under 12)</span>
                        <span className="ml-8 pt-4 text-base sm:text-lg">6:00 PM - Taekwondo Forms / Adults (Over 12)</span>
                    </li>
                    <li className="flex flex-col">
                        <strong className="text-lg sm:text-xl text-white">Thursday:</strong>
                        <span className="ml-8 pt-4 text-base sm:text-lg">4:00 PM - Little Tigers (Ages 4-5)</span>
                        <span className="ml-8 pt-4 text-base sm:text-lg">5:00 PM - Judo | Hapkido / Kids (Under 12)</span>
                        <span className="ml-8 pt-4 text-base sm:text-lg">6:00 PM - Judo | Hapkido / Adults (Over 12)</span>
                    </li>
                    <li className="flex flex-col">
                        <strong className="text-lg sm:text-xl text-white">Saturday:</strong>
                        <span className="ml-8 pt-4 text-base sm:text-lg">9:00 AM - Adnvanced Strength & Conditioning</span>
                        <span className="ml-8 pt-4 text-base sm:text-lg">6:00 PM - Beginning Strength & Conditioning</span>
                    </li>
                </ul>
            </div>
        </section>
    );
}