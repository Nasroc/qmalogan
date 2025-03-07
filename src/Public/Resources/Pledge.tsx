import { Link } from "react-router-dom"

export function Pledge() {
    return (
        <div>
            <Link to="/resources">
                <h1>Back to Resources</h1>
            </Link>
            <h1>Pledge Page</h1>
            <p>This is the Pledge page.</p>
        </div>
    )
}