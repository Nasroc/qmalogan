import React, { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameDay, isSameMonth, subMonths, addMonths, parseISO } from "date-fns";
import { ChevronLeft, ChevronRight, PlusCircle } from "lucide-react";
import { db, collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "../../api/firebase"; // Import Firebase functions
import { EventWithId, Event } from "../../api/firebase"; // Event types

interface CalendarProps {
  isAdmin: boolean;
}

const Calendar: React.FC<CalendarProps> = ({ isAdmin }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events, setEvents] = useState<EventWithId[]>([]);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventTime, setNewEventTime] = useState("");
  const [editingEventId, setEditingEventId] = useState<string | null>(null); // Track the event being edited

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

  // Fetch events from Firestore
  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const eventsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as EventWithId[];
      setEvents(eventsData);
    };
    fetchEvents();
  }, []);

  // Handle adding an event
  const handleAddEvent = async () => {
    if (selectedDate && newEventTitle.trim()) {
      const newEvent: Event = {
        date: format(selectedDate, "yyyy-MM-dd"),
        title: newEventTitle,
        time: newEventTime,
      };

      // Save the new event to Firestore
      const docRef = await addDoc(collection(db, "events"), newEvent);
      setEvents([...events, { id: docRef.id, ...newEvent }]);
      setNewEventTitle("");
      setNewEventTime("");
    }
  };

  // Handle deleting an event
  const handleDeleteEvent = async (eventId: string) => {
    await deleteDoc(doc(db, "events", eventId)); // Delete from Firestore
    setEvents(events.filter(event => event.id !== eventId)); // Update the state
  };

  // Handle editing an event
  const handleEditEvent = (event: EventWithId) => {
    setEditingEventId(event.id); // Set the event to be edited
    setNewEventTitle(event.title);
    setNewEventTime(event.time || "");
  };

  // Save the edited event
  const handleSaveEditedEvent = async () => {
    if (editingEventId && newEventTitle.trim()) {
      const updatedEvent = {
        title: newEventTitle,
        time: newEventTime,
      };

      const eventRef = doc(db, "events", editingEventId); // Reference to the specific event
      await updateDoc(eventRef, updatedEvent); // Update the event in Firestore

      setEvents(events.map(event => 
        event.id === editingEventId ? { ...event, ...updatedEvent } : event
      ));

      // Reset editing state
      setEditingEventId(null);
      setNewEventTitle("");
      setNewEventTime("");
    }
  };

  // Get events for a specific day
  const getEventsForDay = (date: Date) => {
    return events.filter(event => event.date === format(date, "yyyy-MM-dd"));
  };

  // Weekday headers
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="relative w-full max-w-7xl flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg transition-colors duration-300">
    {/* Date Picker */}
    <input
        type="date"
        value={format(currentDate, "yyyy-MM-dd")}
        onChange={(e) => setCurrentDate(parseISO(e.target.value))}
        className="mb-4 p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-400 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition"
    />

    {/* Month Navigation */}
    <div className="flex items-center justify-between w-full mb-4">
        <button onClick={handlePrevMonth} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">
            <ChevronLeft size={24} />
        </button>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white transition-colors">
            {format(currentDate, "MMMM yyyy")}
        </h2>
        <button onClick={handleNextMonth} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">
            <ChevronRight size={24} />
        </button>
    </div>

    {/* Day Names */}
    <div className="grid grid-cols-7 gap-2 w-full text-center text-gray-500 dark:text-gray-400 font-semibold text-lg">
        {dayNames.map((dayName, index) => (
            <div key={index} className="py-3">{dayName}</div>
        ))}
    </div>

    {/* Calendar Grid */}
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
                    className={`relative flex flex-col items-start p-2 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer transition-all duration-200
                        ${isToday ? "bg-blue-400 dark:bg-blue-500 text-white font-bold" : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300"}
                        ${isSelected ? "outline outline-4 outline-yellow-400" : ""}
                        ${!isCurrentMonth ? "opacity-50" : ""}`}
                    style={{ aspectRatio: '1.25 / 1' }}
                >
                    <span className="text-sm md:text-xl font-semibold">
                        {format(day, "d")}
                    </span>

                    {/* Event Titles */}
                    <div className="mt-2 text-sm text-yellow-500 w-full overflow-hidden">
                        {dayEvents.slice(0, 2).map((event, idx) => (
                            <p key={idx} className="truncate">
                                {event.title} <br />
                                {event.time && (
                                    <span className="text-gray-500 dark:text-gray-400">
                                        at {event.time}
                                    </span>
                                )}
                            </p>
                        ))}
                        {dayEvents.length > 2 && (
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                + more
                            </p>
                        )}
                    </div>
                </div>
            );
        })}
    </div>

    {/* Event Input for Admins */}
    {isAdmin && selectedDate && (
        <div className="w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg mt-4 transition-colors">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                Add Event for {format(selectedDate, "MMMM d, yyyy")}
            </h3>

            <div className="flex items-center mb-4">
                <input
                    type="text"
                    value={newEventTitle}
                    onChange={(e) => setNewEventTitle(e.target.value)}
                    className="flex-1 p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded border border-gray-400 dark:border-gray-600 focus:outline-none"
                    placeholder="Event title..."
                />
                <input
                    type="time"
                    className="ml-2 p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded border border-gray-400 dark:border-gray-600"
                    value={newEventTime}
                    onChange={(e) => setNewEventTime(e.target.value)}
                />
                <button
                    onClick={handleAddEvent}
                    className="ml-2 p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
                >
                    <PlusCircle size={24} />
                </button>
            </div>
        </div>
    )}

    {/* List of Events */}
    {selectedDate && (
        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mt-4 w-full">
            <h4 className="text-gray-800 dark:text-white font-semibold mb-2">
                Events for {format(selectedDate, "MMMM d, yyyy")}:
            </h4>
            {getEventsForDay(selectedDate).map((event, idx) => (
            <div key={idx} className="flex justify-between items-center mb-2 p-4 bg-gray-200 dark:bg-gray-900 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all">
                {editingEventId === event.id ? (
                    <>
                        <input
                            type="text"
                            value={newEventTitle}
                            onChange={(e) => setNewEventTitle(e.target.value)}
                            className="flex-1 p-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded border border-gray-400 dark:border-gray-600"
                        />
                        <input
                            type="time"
                            value={newEventTime}
                            onChange={(e) => setNewEventTime(e.target.value)}
                            className="ml-2 p-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded border border-gray-400 dark:border-gray-600"
                        />
                        <button
                            onClick={handleSaveEditedEvent}
                            className="ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setEditingEventId(null)}
                            className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-all"
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        <span className="text-yellow-500">{event.title} at {event.time}</span>
                        {isAdmin && (
                            <>
                                <button
                                    onClick={() => handleEditEvent(event)}
                                    className="text-blue-500 font-semibold px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-all"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteEvent(event.id)}
                                    className="text-red-500 font-semibold px-4 py-2 rounded hover:bg-red-600 hover:text-white transition-all"
                                >
                                    Delete
                                </button>
                            </>
                        )}
                    </>
                )}
            </div>
            ))}
        </div>
    )}
    </div>
  );
};

export default Calendar;
