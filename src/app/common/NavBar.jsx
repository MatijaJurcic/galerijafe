import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="container col-lgoffset-4 col-lg-8">
        <header>
            <nav>
                {window.localStorage.getItem("loginToken") ? (
                    <div>
                        <Link to="/"> All Galleries</Link>
                        <Link to="/add"> Create Gallery</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/login"> Login </Link>
                        <Link to="/register"> Register</Link>
                    </div>
                )}
            </nav>
        </header>
        </div>
    )
}
