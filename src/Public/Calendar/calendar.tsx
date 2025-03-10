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

      {/* Calendar grid with bigger boxes for dates with events */}
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
              className={`relative flex flex-col items-start p-1 border border-gray-600 rounded-lg cursor-pointer transition duration-200 overflow-hidden
              ${isToday ? "bg-blue-500 text-white font-bold" : "bg-gray-900 text-gray-300"}
              ${isSelected ? "outline outline-4 outline-yellow-500" : ""}
              ${!isCurrentMonth ? "opacity-50" : ""}`}
              style={{ aspectRatio: '1.25 / 1' }}
            >
              <span className="text-sm md:text-xl font-semibold">{format(day, "d")}</span>

              {/* Show event titles inside the day box */}
              <div className="mt-2 text-sm text-yellow-400 w-full overflow-hidden">
                {dayEvents.slice(0, 2).map((event, idx) => (
                  <p key={idx} className="truncate">{event.title} <br /> {event.time && <span className="text-gray-400">at {event.time}</span>}</p>
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

          <div className="flex items-center mb-4">
            <input
              type="text"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
              className="flex-1 p-3 bg-gray-800 text-white rounded border border-gray-600"
              placeholder="Event title..."
            />
            <input
              type="time"
              className="ml-2 p-3 bg-gray-800 text-white rounded border border-gray-600"
              value={newEventTime}
              onChange={(e) => setNewEventTime(e.target.value)}
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

      {/* List of events for the selected day */}
      {selectedDate && (
        <div className="bg-gray-800 p-3 rounded-lg mt-4 w-full">
          <h4 className="text-white font-semibold mb-2">Events for {format(selectedDate, "MMMM d, yyyy")}:</h4>
          {getEventsForDay(selectedDate).map((event, idx) => (
            <div key={idx} className="flex justify-between items-center mb-2 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out">
              <span className="text-yellow-400">{event.title} at {event.time}</span>
              {isAdmin && (
                <>
                  <button
                    onClick={() => handleEditEvent(event)}
                    className="text-blue-500 font-semibold px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition duration-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteEvent(event.id)}
                    className="text-red-500 font-semibold px-4 py-2 rounded hover:bg-red-600 hover:text-white transition duration-200"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Edit Event Modal */}
      {editingEventId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
            <button
              onClick={() => setEditingEventId(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Edit Event</h3>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900">Title</label>
              <input
                type="text"
                value={newEventTitle}
                onChange={(e) => setNewEventTitle(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-indigo-600 sm:text-sm"
                placeholder="Event title"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900">Time</label>
              <input
                type="time"
                value={newEventTime}
                onChange={(e) => setNewEventTime(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-indigo-600 sm:text-sm"
              />
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setEditingEventId(null)}
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEditedEvent}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
