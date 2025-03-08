import { Link } from "react-router-dom"

export function Pledges() {
    return (
        <div>
            <Link to="/resources">
                <h1>Back to Resources</h1>
            </Link>
            <h1>Pledges Page</h1>
            <p>This is the Pledge page.</p>
        </div>
    )
}