import Calendar from './calendar';
import { Schedule } from './schedule';

export function Events_Schedule() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen dark:from-[#343438] dark:to-[#1c1c27] dark:text-white bg-linear-to-b from-[#ffffff] to-[#74748b] py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl space-y-8">
                <Calendar />
                <Schedule />
            </div>
        </div>
    );
}