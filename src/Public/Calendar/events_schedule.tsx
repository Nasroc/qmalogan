import Calendar from './calendar';
import { Schedule } from './schedule';

export function Events_Schedule() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen custom-bg custom-dark py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl space-y-8 items-center justify-center">
                <h1 className="text-4xl font-bold text-gray-100 text-center">Events & Schedule</h1>
                <Calendar isAdmin={true} />
                <Schedule />
            </div>
        </div>
    );
}