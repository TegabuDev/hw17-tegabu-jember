import React, { useRef } from "react";
import Button from "./Button";

const RegisterForm = ({ handleAuth, setShowRegister }) => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();

    const username = userNameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    if (!username.trim() || !password.trim() || !email.trim()) return;

    handleAuth(username, password, true, email);
    // userNameRef(null);
    // passwordRef(null);
    // emailRef(null);
  };

  return (
    <div className="register-body-container">
      <div className="register-container">
        <h1>Sign up</h1>
        <form onSubmit={handleRegister}>
          <input
            id="registerUsername"
            type="text"
            ref={userNameRef}
            placeholder="Username"
            required
          />
          <input
            id="registerEmail"
            type="email"
            ref={emailRef}
            placeholder="Email"
            required
          />
          <input
            id="registerPassword"
            type="password"
            ref={passwordRef}
            placeholder="Password"
            required
          />
          <Button className="register-btn" content="Signup" />
        </form>
        <div className="auth-switch">
          <p>
            Already have an account?{"  "}{" "}
            <button onClick={() => setShowRegister(false)}>Sign in</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
