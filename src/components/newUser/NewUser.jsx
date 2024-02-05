import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./newUser.style.css";

const defaultData = {
  id: "",
  name: "",
  email: "",
  phone: "",
  website: "",
};

const NewUser = ({ addUser }) => {
  const [newUser, setNewUser] = useState(defaultData);

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
      id: uuidv4().slice(-3),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(newUser);
    setNewUser(defaultData);
  };

  return (
    <div className="newUser-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={newUser.name}
            type="text"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={newUser.email}
            type="email"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            value={newUser.phone}
            type="number"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <input
            name="website"
            value={newUser.website}
            type="text"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type={"submit"}>Add</button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
