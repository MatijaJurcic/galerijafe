import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <header>
            <nav>
                <Link to="/"> All Galleries</Link>
                <Link to="/login"> Login </Link>
                <Link to="/register"> Register</Link>
            </nav>
        </header>
    )
}