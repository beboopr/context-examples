import { useContext } from "react";
import { UserContext } from "../App";

export default function Logout() {
    const { user, setUser} = useContext(UserContext)
    return(
        <>
        {user
        ? <button onClick={() => setUser()}>Logout</button>
        : null
        }
        </>
    )
}
