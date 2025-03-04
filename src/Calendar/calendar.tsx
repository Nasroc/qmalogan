import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameDay, parseISO } from "date-fns";

interface Event {
    date: string;
    title: string;
}

interface CalendarProps {
    events?: Event[];
}

const Calendar: React.FC<CalendarProps> = ({ events = [] }) => {
    // State to keep track of the current date being displayed
    const [currentDate, setCurrentDate] = useState(new Date());
    // State to keep track of the selected date
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    // Get the start and end dates of the current month
    const startMonth = startOfMonth(currentDate);
    const endMonth = endOfMonth(currentDate);
    // Get the start and end dates of the grid (including the days from the previous and next months)
    const startGrid = startOfWeek(startMonth);
    const endGrid = endOfWeek(endMonth);

    // Generate an array of all the days to be displayed in the calendar grid
    const days = [];
    let day = startGrid;
    while (day <= endGrid) {
        days.push(day);
        day = addDays(day, 1);
    }

    // Handle the click event for a date
    const handleDateClick = (date: Date) => {
        setSelectedDate(date);
    };

    // Array of day names to display in the calendar header
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <div className="w-screen h-screen min-h-screen flex flex-col items-center p-4 bg-linear-to-b from-[#ffffff] to-[#74748b]">
            {/* Display the current month and year */}
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{format(currentDate, "MMMM yyyy")}</h2>
            <div className="grid grid-cols-7 gap-1 w-full mb-4 max-w-500">
                {/* Display the day names in the calendar header */}
                {dayNames.map((dayName, index) => {
                    return (
                        <div key={index} className="p-2 text-center font-bold text-gray-500">
                            {dayName}
                        </div>
                    );
                })}
            </div>
            <div className="grid grid-cols-7 gap-1 w-full max-h-screen pb-60 max-w-500" style={{ aspectRatio: '1.25 / 1' }}>
                {/* Display the days in the calendar grid */}
                {days.map((day, index) => {
                    const isToday = isSameDay(day, new Date());
                    const isSelected = selectedDate && isSameDay(day, selectedDate);
                    const hasEvent = events.some(event => isSameDay(parseISO(event.date), day));
                    return (
                        <div
                            key={index}
                            onClick={() => handleDateClick(day)}
                            className={`p-4 border border-gray-200 flex flex-col items-center justify-start cursor-pointer transition-colors duration-200 min-h-[100px] ${
                                isToday ? "bg-blue-100 text-black font-bold" : "bg-white text-gray-900 font-light"
                            } ${isSelected ? "outline outline-2 outline-blue-800" : ""}`}
                        >
                            {/* Display the day number */}
                            <span className="text-lg font-medium place-self-start">{format(day, "d")}</span>
                            {/* Display a dot if there is an event on this day */}
                            {hasEvent && <span className="text-sm text-red-600 font-bold mt-1">●</span>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Calendar;
