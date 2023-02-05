import React from "react";
import { useState } from "react";
import { authService } from "../services/AuthService";
import 'bootstrap/dist/css/bootstrap.min.css';

export const AppRegister = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(
        !data.email || 
        !data.password || 
        !data.last_name || 
        !data.first_name
      )
    {
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
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="main" style={{color:"red"}}>
          <label>First Name</label>
          <input
            name="first_name"
            type="text"
            onChange={(e) => setData({ ...data, first_name: e.target.value })}
          />
        </div>
        <div>
          <label>Last Name </label>
          <input
            name="last_name"
            type="text"
            onChange={(e) => setData({ ...data, last_name: e.target.value })}
          />
        </div>
        <div>
          <label>Email address</label>
          <input
            name="email"
            type="text"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            name="password_confirmation"
            type="password"
            onChange={(e) => setData({ ...data, password_confirmation: e.target.value })}
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

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
