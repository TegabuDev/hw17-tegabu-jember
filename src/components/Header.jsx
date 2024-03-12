import React from "react";
import Button from "./Button";

const Header = ({ loggedInUser, handleLogout, avatar }) => {
  return (
    <div className="header-container">
      <div>
        <h1>Students</h1>
      </div>
      <div>
        <div className="right-header">
          {loggedInUser ? (
            <>
              <div>
                {/* <h4>welcome: {loggedInUser.username}</h4> */}
                <img src={loggedInUser.avatar} width="50px" alt="" />
              </div>
              <div>
                <Button
                  className="logout-btn"
                  content="Logout"
                  onClick={() => handleLogout()}
                />
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
