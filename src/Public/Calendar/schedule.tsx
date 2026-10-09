export function LoganSchedule() {
    return (
        <section className="p-10 bg-white dark:bg-gray-900 rounded-lg shadow-lg transition-colors duration-300">
            <div>
                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center transition-colors">
                    Weekly Schedule (Logan)
                </h1>

                <hr className="my-6 border-gray-300 dark:border-gray-700 transition-colors" />

                {/* List of Days and Events */}
                <ul className="space-y-10">
                    {[
                        {
                            day: "Monday",
                            events: [
                                "10:00 AM - Kyuki-do / Tiny Tigers Parent & Me (Ages 18 mos - 3 yrs)",
                                "10:45 AM - Kyuki-do / Homeschool (Family)",
                                "12:00 PM - Kyuki-do / Adults (Ages 12+)",
                                "5:00 PM - Kyuki-do / Youth (Ages 6-12)",
                                "6:00 PM - Kyuki-do / Adults (Ages 12+)",
                            ],
                        },
                        {
                            day: "Tuesday",
                            events: [
                                "3:00 PM - Kyuki-do / Homeschool (Ages 5-12)",
                                "4:00 PM - Kyuki-do / Little Tigers (Ages 3-5)",
                                "5:00 PM - Kyuki-do / Youth (Ages 6-12)",
                                "6:00 PM - Kyuki-do / Adults (Ages 12+)",
                                "7:00 PM - Kyuki-do / Women (Ages 12+)",
                            ],
                        },
                        {
                            day: "Wednesday",
                            events: [
                                "5:00 PM - Kyuki-do / Youth (Ages 6-12)",
                                "6:00 PM - Kyuki-do / Adults (Ages 12+)",
                            ],
                        },
                        {
                            day: "Thursday",
                            events: [
                                "3:00 PM - Kyuki-do / Homeschool (Ages 5-12)",
                                "4:00 PM - Kyuki-do / Little Tigers (Ages 3-5)",
                                "5:00 PM - Kyuki-do / Youth (Ages 6-12)",
                                "6:00 PM - Kyuki-do / Adults (Ages 12+)",
                            ],
                        },
                        {
                            day: "Saturday",
                            events: [
                                "8:00 AM - Performance & Conditioning",
                                "9:45 AM - Competition Forms / Open Mat Forms"
                            ],
                        },
                    ].map(({ day, events }) => (
                        <li
                            key={day}
                            className="flex flex-col gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-md transition-colors"
                        >
                            {/* Day Label */}
                            <strong className="text-2xl text-gray-800 dark:text-white border-l-4 border-yellow-400 pl-4">
                                {day}
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

export function SmithfieldSchedule() {
    return (
        <section className="p-10 bg-white dark:bg-gray-900 rounded-lg shadow-lg transition-colors duration-300">
            <div>
                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center transition-colors">
                    Weekly Schedule (Smithfield)
                </h1>

                <hr className="my-6 border-gray-300 dark:border-gray-700 transition-colors" />

                {/* List of Days and Events */}
                <ul className="space-y-10">
                    {[
                        {
                            day: "Tuesday",
                            events: [
                                "5:00 PM - Kyuki-do (All ranks & ages)",
                            ],
                        },
                        {
                            day: "Thursday",
                            events: [
                                "5:00 PM - Kyuki-do (All ranks & ages)",
                            ],
                        },
                    ].map(({ day, events }) => (
                        <li
                            key={day}
                            className="flex flex-col gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-md transition-colors"
                        >
                            {/* Day Label */}
                            <strong className="text-2xl text-gray-800 dark:text-white border-l-4 border-yellow-400 pl-4">
                                {day}
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
