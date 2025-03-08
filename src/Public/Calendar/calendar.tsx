import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameDay, parseISO, isSameMonth, subMonths, addMonths } from "date-fns";

interface Event {
    date: string;
    title: string;
}

interface CalendarProps {
    events?: Event[];
}

const Calendar: React.FC<CalendarProps> = ({ events = [] }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    // Calculate the start and end of the current month
    const startMonth = startOfMonth(currentDate);
    const endMonth = endOfMonth(currentDate);
    // Calculate the start and end of the grid (week) that contains the current month
    const startGrid = startOfWeek(startMonth);
    const endGrid = endOfWeek(endMonth);

    // Generate all days to be displayed in the calendar grid
    const days = [];
    let day = startGrid;
    while (day <= endGrid) {
        days.push(day);
        day = addDays(day, 1);
    }

    // Handle date click to set the selected date
    const handleDateClick = (date: Date) => {
        setSelectedDate(date);
    };

    // Handle previous month button click
    const handlePrevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
    };

    // Handle next month button click
    const handleNextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    };

    // Array of day names to display in the calendar header
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <div className="relative isolate w-full flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg">
            {/* Header with navigation buttons and current month */}
            <div className="flex items-center mb-4">
            <button onClick={handlePrevMonth} className="p-2 mr-4 bg-gray-700 text-white rounded active:bg-gray-400">Previous</button>
            <h2 className="text-2xl font-bold text-white">{format(currentDate, "MMMM yyyy")}</h2>
            <button onClick={handleNextMonth} className="p-2 ml-4 bg-gray-700 text-white rounded active:bg-gray-400">Next</button>
            </div>
            {/* Day names header */}
            <div className="grid grid-cols-7 gap-1 w-full mb-4 max-w-500">
            {dayNames.map((dayName, index) => (
                <div key={index} className="p-2 text-center font-bold text-gray-500">
                {dayName}
                </div>
            ))}
            </div>
            {/* Calendar grid with days */}
            <div className="grid grid-cols-7 gap-1 w-full max-h-screen pb-10 px-10 max-w-500" style={{ aspectRatio: '1.25 / 1' }}>
            {days.map((day, index) => {
                const isToday = isSameDay(day, new Date());
                const isSelected = selectedDate && isSameDay(day, selectedDate);
                const hasEvent = events.some(event => isSameDay(parseISO(event.date), day));
                const isCurrentMonth = isSameMonth(day, currentDate);
                return (
                <div
                    key={index}
                    onClick={() => handleDateClick(day)}
                    className={`lg:p-4 sm:p-1 border border-gray-200 flex flex-col items-center justify-start cursor-pointer transition-colors duration-200 ${
                    isToday ? "bg-blue-100 text-black font-bold" : "bg-white text-gray-900 font-light"
                    } ${isSelected ? "outline outline-2 outline-blue-800" : ""}`}
                    style={{ opacity: isCurrentMonth ? 1 : 0.5 }}
                >
                    <span className="text-lg font-medium place-self-start">{format(day, "d")}</span>
                    {hasEvent && <span className="text-sm text-red-600 font-bold mt-1">●</span>}
                </div>
                );
            })}
            </div>
        </div>
    );
};

export default Calendar;