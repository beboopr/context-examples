import { useContext } from "react"
import { UserContext } from "../App"

export default function Welcome() {
    const { user } = useContext(UserContext)
    return (
        <section>
            <h2>Welcome {user || 'Guest'}</h2>
        </section>
    )
}

