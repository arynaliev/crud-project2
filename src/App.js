import React, { useState } from "react";
import "./App.css";
import useCount from "./components/customHooks/useCount";
import useGetUsers from "./components/customHooks/useGetUsers";
import UsersApp from "./applications/usersApp/UsersApp";

function App() {
  const { count, total, onMinusClick, onPlusClick } = useCount(0);
  const { isLoading, users } = useGetUsers();

  const renderUsers = (users) => {
    return (
      <ol>
        {users.map((el, index) => (
          <li key={index}>{el.name}</li>
        ))}
      </ol>
    );
  };

  return (
    <div>
      <button onClick={onMinusClick}>-</button>
      {count} - {total}
      <button onClick={onPlusClick}>+</button>
      {isLoading ? <p>Loading...</p> : renderUsers(users)}
    </div>
  );
}

export default App;
