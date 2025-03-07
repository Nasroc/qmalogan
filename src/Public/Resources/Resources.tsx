import { Link } from 'react-router-dom';

export function Resources() {
    return (
        <div>
            <Link to="/resources/forms" className="text-blue-500 hover:underline">
                <h1>Forms</h1>
            </Link>
            <Link to="/resources/tenets" className="text-blue-500 hover:underline">
                <h1>Tenets</h1>
            </Link>
            <Link to="/resources/pledge" className="text-blue-500 hover:underline">
                <h1>Pledge</h1>
            </Link>
            <Link to="/resources/judo" className="text-blue-500 hover:underline">
                <h1>Judo</h1>
            </Link>
        </div>
    );
}