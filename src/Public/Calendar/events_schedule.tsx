import Calendar from './calendar';
import { Schedule } from './schedule';

interface EventsScheduleProps {
    isAdmin: boolean;
}

export function Events_Schedule({ isAdmin }: EventsScheduleProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen custom-bg custom-dark transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl space-y-8">
                {/* Header */}
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 text-center transition-colors duration-300">
                    Events & Schedule
                </h1>

                {/* Calendar Component */}
                <Calendar isAdmin={isAdmin} />

                {/* Schedule Component */}
                <Schedule />
            </div>
        </div>
    );
}
