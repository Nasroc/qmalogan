import { Link } from 'react-router-dom';

export function Resources() {
    return (
        <div className="dark:from-[#343438] dark:to-[#1c1c27] dark:text-white bg-linear-to-b from-[#ffffff] to-[#74748b]">
            <Link to="/resources/forms">
                <h1>Form</h1>
            </Link>
        </div>
    );
}