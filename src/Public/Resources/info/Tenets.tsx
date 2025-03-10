import { Link } from "react-router-dom"

export function Tenets() {
    return (
        <div>
            <Link to="/resources">
                <h1>Back to Resources</h1>
            </Link>
            <h1>Tenets Page</h1>
            <p>This is the Tenets page.</p>
        </div>
    )
}