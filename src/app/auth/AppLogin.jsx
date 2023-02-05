import { useState } from "react";
import { authService } from "../services/AuthService";

export const AppLogin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      alert("One or more field is blank.");
      return;
    }
    try {
      await authService.login(data);
    } catch (e) {
      console.log({ e });
    }
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <h1>Login</h1>
            <form id="loginform" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  className="form-control"
                  name="email"
                  type="text"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  className="form-control"
                  name="password"
                  type="password"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
              <button type="submit" class="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
