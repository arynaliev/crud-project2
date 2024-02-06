import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import useCount from "./components/customHooks/useCount";
import useGetUsers from "./components/customHooks/useGetUsers";
import AdminPage from "./components/adminPage/AdminPage";
import UsersApp from "./applications/usersApp/UsersApp";
import LoginPage from "./components/loginPage/LoginPage";
import HomePage from "./components/homePage/HomePage";

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState({ name: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateStatus = () => {
    if (user.name && user.password) {
      setIsLoggedIn(!isLoggedIn);
    }
  };

  useEffect(() => {
    updateStatus();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      <div className="App">
        <HomePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;
