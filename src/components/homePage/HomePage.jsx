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
        <div>
          <p>Home</p>
          <p>About Us</p>
        </div>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </nav>
      {isLoggedIn ? null : <LoginPage />}
    </div>
  );
};

export default HomePage;
