import React, { useContext } from "react";
import "./homePage.style.css";
import { UserContext } from "../../App";
import LoginPage from "../loginPage/LoginPage";

const HomePage = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  //   function handleClick() {
  //     if (!isLoggedIn) {
  //       return <LoginPage />;
  //     } else {
  //       return <HomePage />;
  //     }
  //     //  console.log("clicked");
  //   }

  //   function handleLogout() {
  //     setIsLoggedIn(false);
  //   }

  return (
    <div className="home-page">
      <nav className="nav-bar">
        <div style={{ display: "flex", gap: "1rem" }}>
          <p>Home</p>
          <p>About Us</p>
        </div>
        {isLoggedIn ? (
          <button id="logout-btn" onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        ) : (
          <button id="login-btn" onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        )}
      </nav>
      {isLoggedIn ? null : <LoginPage />}
    </div>
  );
};

export default HomePage;
