import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameDay, isSameMonth, subMonths, addMonths, parseISO } from "date-fns";
import { ChevronLeft, ChevronRight, PlusCircle } from "lucide-react";

interface Event {
    date: string;
    title: string;
}

interface CalendarProps {
    isAdmin: boolean;
}

const Calendar: React.FC<CalendarProps> = ({ isAdmin }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [events, setEvents] = useState<Event[]>([]);
    const [newEventTitle, setNewEventTitle] = useState("");

    // Calculate the grid range
    const startMonth = startOfMonth(currentDate);
    const endMonth = endOfMonth(currentDate);
    const startGrid = startOfWeek(startMonth);
    const endGrid = endOfWeek(endMonth);

    // Generate calendar days
    const days = [];
    let day = startGrid;
    while (day <= endGrid) {
        days.push(day);
        day = addDays(day, 1);
    }

    // Handle previous/next month
    const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
    const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

    // Handle adding an event
    const handleAddEvent = () => {
        if (selectedDate && newEventTitle.trim()) {
            setEvents([...events, { date: format(selectedDate, "yyyy-MM-dd"), title: newEventTitle }]);
            setNewEventTitle("");
        }
    };

    // Get events for a specific day
    const getEventsForDay = (date: Date) => {
        return events.filter(event => event.date === format(date, "yyyy-MM-dd"));
    };

    // Weekday headers
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <div className="relative w-full max-w-7xl flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg">
            {/* Date Picker */}
            <input
                type="date"
                value={format(currentDate, "yyyy-MM-dd")}
                onChange={(e) => setCurrentDate(parseISO(e.target.value))}
                className="mb-4 p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none"
            />

            {/* Month navigation */}
            <div className="flex items-center justify-between w-full mb-4">
                <button onClick={handlePrevMonth} className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition">
                    <ChevronLeft size={24} />
                </button>
                <h2 className="text-3xl font-bold text-white">{format(currentDate, "MMMM yyyy")}</h2>
                <button onClick={handleNextMonth} className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition">
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Day names */}
            <div className="grid grid-cols-7 gap-2 w-full text-center text-gray-400 font-semibold text-lg">
                {dayNames.map((dayName, index) => (
                    <div key={index} className="py-3">{dayName}</div>
                ))}
            </div>

            {/* Calendar grid with bigger boxes */}
            <div className="grid grid-cols-7 gap-2 w-full">
                {days.map((day, index) => {
                    const isToday = isSameDay(day, new Date());
                    const isSelected = selectedDate && isSameDay(day, selectedDate);
                    const dayEvents = getEventsForDay(day);
                    const isCurrentMonth = isSameMonth(day, currentDate);

                    return (
                        <div
                            key={index}
                            onClick={() => setSelectedDate(day)}
                            className={`relative flex flex-col items-start p-1 border border-gray-600 rounded-lg cursor-pointer transition duration-200 aspect-[1.25/1]
                                ${isToday ? "bg-blue-500 text-white font-bold" : "bg-gray-900 text-gray-300"}
                                ${isSelected ? "outline outline-4 outline-yellow-500" : ""}
                                ${!isCurrentMonth ? "opacity-50" : ""}`}
                        >
                            <span className="text-xl font-semibold">{format(day, "d")}</span>

                            {/* Show event titles inside the day box */}
                            <div className="mt-2 text-sm text-yellow-400 w-full overflow-hidden">
                                {dayEvents.slice(0, 2).map((event, idx) => (
                                    <p key={idx} className="truncate">{event.title}</p>
                                ))}
                                {dayEvents.length > 2 && <p className="text-xs text-gray-400">+ more</p>}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Event Input (Only for Admins) */}
            {isAdmin && selectedDate && (
                <div className="w-full p-4 bg-gray-700 rounded-lg shadow-lg mt-4">
                    <h3 className="text-lg font-bold text-white mb-2">
                        Add Event for {format(selectedDate, "MMMM d, yyyy")}
                    </h3>

                    <div className="flex items-center">
                        <input
                            type="text"
                            value={newEventTitle}
                            onChange={(e) => setNewEventTitle(e.target.value)}
                            className="flex-1 p-3 bg-gray-800 text-white rounded border border-gray-600"
                            placeholder="Event title..."
                        />
                        <button 
                            onClick={handleAddEvent} 
                            className="ml-2 p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        >
                            <PlusCircle size={24} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;
