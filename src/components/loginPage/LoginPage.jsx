import React, { useState, useContext } from "react";
import { UserContext } from "../../App";

const creds = {
  username: "geek",
  password: "neverGiveUp",
};

const LoginPage = () => {
  const { user, setUser } = useState({ username: "", password: "" });
  const { setUser: updatedUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username === creds.username && user.password === creds.password) {
      console.log("correct user creds");
      updatedUser(user);
    } else {
      alert("try again");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Log in</button>
      </form>
      <hr />
    </div>
  );
};

export default LoginPage;
