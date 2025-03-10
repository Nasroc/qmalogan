export function Schedule() {
    return (
        <section className="p-10 bg-white dark:bg-gray-900 rounded-lg shadow-lg transition-colors duration-300">
            <div className="container px-6 py-10 mx-auto">
                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center transition-colors">
                    Weekly Schedule
                </h1>

                <hr className="my-6 border-gray-300 dark:border-gray-700 transition-colors" />

                {/* List of Days and Events */}
                <ul className="space-y-10">
                    {[
                        {
                            day: "Monday",
                            events: [
                                "5:00 PM - Taekwondo / Kids (Under 12)",
                                "6:00 PM - Taekwondo / Adults (Over 12)",
                            ],
                        },
                        {
                            day: "Tuesday",
                            events: [
                                "4:00 PM - Little Tigers (Ages 4-5)",
                                "5:00 PM - Taekwondo Sparring / Kids (Under 12)",
                                "6:00 PM - Taekwondo Sparring / Adults (Over 12)",
                            ],
                        },
                        {
                            day: "Wednesday",
                            events: [
                                "5:00 PM - Taekwondo Forms / Kids (Under 12)",
                                "6:00 PM - Taekwondo Forms / Adults (Over 12)",
                            ],
                        },
                        {
                            day: "Thursday",
                            events: [
                                "4:00 PM - Little Tigers (Ages 4-5)",
                                "5:00 PM - Judo | Hapkido / Kids (Under 12)",
                                "6:00 PM - Judo | Hapkido / Adults (Over 12)",
                            ],
                        },
                        {
                            day: "Saturday",
                            events: [
                                "8:00 AM - Advanced Strength & Conditioning",
                                "9:30 AM - Beginning Strength & Conditioning",
                            ],
                        },
                    ].map(({ day, events }) => (
                        <li
                            key={day}
                            className="flex flex-col gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-md transition-colors"
                        >
                            {/* Day Label */}
                            <strong className="text-2xl text-gray-800 dark:text-white border-l-4 border-yellow-400 pl-4">
                                {day}:
                            </strong>
                            {/* List of Events */}
                            {events.map((event, index) => (
                                <span key={index} className="ml-6 text-lg text-gray-700 dark:text-gray-300 transition-colors">
                                    {event}
                                </span>
                            ))}
                        </li>
                    ))}
                </ul>
            </div>
        </section>

    );
}
