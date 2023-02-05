import React from "react";
import { useState } from "react";
import { authService } from "../services/AuthService";
import "bootstrap/dist/css/bootstrap.min.css";

export const AppRegister = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password || !data.last_name || !data.first_name) {
      alert("One or more field is blank.");
      return;
    }
    try {
      await authService.register(data);
    } catch (e) {
      console.log({ e });
    }
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <h1>Register</h1>
            <form id="loginform" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  className="form-control"
                  name="first_name"
                  type="text"
                  onChange={(e) =>
                    setData({ ...data, first_name: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label> Last Name </label>
                <input
                  className="form-control"
                  name="last_name"
                  type="text"
                  onChange={(e) =>
                    setData({ ...data, last_name: e.target.value })
                  }
                />
              </div>
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
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  className="form-control"
                  name="password_confirmation"
                  type="password"
                  onChange={(e) =>
                    setData({ ...data, password_confirmation: e.target.value })
                  }
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={isChecked}
                  onChange={checkHandler}
                />
                <label htmlFor="checkbox">I agree to Terms of Service </label>
              </div>

              <button type="submit" class="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
