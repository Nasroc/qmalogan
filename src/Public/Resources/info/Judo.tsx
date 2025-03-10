import { Link } from "react-router-dom"

export function Judo() {
    return (
        <div>
            <Link to="/resources">
                <h1>Back to Resources</h1>
            </Link>
            <h1>Judo Page</h1>
            <p>This is the Judo page.</p>
        </div>
    )
}