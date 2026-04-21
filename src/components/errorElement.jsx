import { Link } from "react-router";

export default function ErrorElement() {
    return (<>
        <h1>404</h1>
        <p>Oooops... Page Not Found <Link to="/">CLick here</Link> to go home</p>

    </>)
}