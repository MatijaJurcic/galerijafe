import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <header>
        <nav>
          {window.localStorage.getItem("loginToken") ? (
            <div class="alert alert-primary" role="alert">
              <nav>
                <Link to="/">All galleries</Link>{" "}
                <Link to="/my-galleries">My galleries</Link>{" "}
                <Link to="/create">Create new gallery</Link>{" "}
                <Link to="/logout">Logout</Link>
              </nav>
            </div>
          ) : (
            <div class="alert alert-primary" role="alert">
              <nav>
                <Link to="/login"> Login </Link>
                <Link to="/register"> Register</Link>
              </nav>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};
