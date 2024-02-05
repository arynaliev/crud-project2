import React, { useState, useEffect } from "react";
import "./usersApp.style.css";
import UsersTable from "../../components/usersTable/UsersTable";
import NewUser from "../../components/newUser/NewUser";

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

  const addUser = (user) => {
    setUsersList([...usersList, user]);
  };

  const deleteHandler = (id) => {
    setUsersList(usersList.filter((el) => el.id !== id));
  };

  return (
    <>
      <NewUser addUser={addUser} />
      <UsersTable usersList={usersList} deleteHandler={deleteHandler} />
    </>
  );
};

export default UsersApp;
