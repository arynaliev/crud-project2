import React, { useState, createContext } from "react";
import "./App.css";
import useCount from "./components/customHooks/useCount";
import useGetUsers from "./components/customHooks/useGetUsers";
import AdminPage from "./components/adminPage/AdminPage";
import UsersApp from "./applications/usersApp/UsersApp";
import LoginPage from "./components/loginPage/LoginPage";

export const UserContext = createContext(null);

function App() {
  // const [user, setUser] = useState({ name: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <div className="App">
        <p>App JS {isAuthenticated}</p>
        {isAuthenticated ? ( <LoginPage /> ) : (<>
          <AdminPage />
          
        </>)
      </div>
    </UserContext.Provider>
  );
}

export default App;
