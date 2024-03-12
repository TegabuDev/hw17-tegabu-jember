import { useState, useEffect } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { userService } from "./services/userService";
import { storageService } from "./services/storageService";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  // useEffect(() => {
  //   const loadData = async () => {
  //     const data = await userService.fetchAvatar();
  //     setAvatar(data.image);
  //   };
  //   loadData();
  // }, []);

  useEffect(() => {
    const loggedInUser = storageService.getLoggedInUser();
    if (loggedInUser) {
      setLoggedInUser(loggedInUser);
    }
  }, []);

  const handleAuth = (username, password, isRegister = false, email = "") => {
    if (isRegister) {
      userService.createUser(username, email, password);
      setShowRegister(false);
    } else {
      const user = userService.login(username, password);
      if (!user) {
        alert("invalid");
        // setShowRegister(true);
        return;
      }
      setLoggedInUser(user);
    }
  };

  const handleLogout = () => {
    userService.logout();
    setLoggedInUser(null);
  };

  return (
    <>
      <Header loggedInUser={loggedInUser} handleLogout={handleLogout} />

      {!loggedInUser ? (
        showRegister ? (
          <RegisterForm
            handleAuth={handleAuth}
            setShowRegister={setShowRegister}
          />
        ) : (
          <LoginForm
            handleAuth={handleAuth}
            setShowRegister={setShowRegister}
          />
        )
      ) : (
        <Dashboard loggedInUser={loggedInUser} />
      )}
      <Footer />
    </>
  );
}

export default App;
