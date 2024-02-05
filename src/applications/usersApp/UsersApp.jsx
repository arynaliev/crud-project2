import React, { useState, useEffect } from "react";
import "./usersApp.style.css";
import UsersTable from "../../components/usersTable/UsersTable";

const UsersApp = () => {
  const [usersList, setUsersList] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsersList(data);
    } catch (err) {
      console.log("error:", err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteHandler = (id) => {
    setUsersList(usersList.filter((el) => el.id !== id));
  };
  return (
    <>
      <UsersTable usersList={usersList} deleteHandler={deleteHandler} />
    </>
  );
};

export default UsersApp;
