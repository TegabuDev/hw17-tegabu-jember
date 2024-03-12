import React, { useState } from "react";
import User from "./User";

const UsersList = ({ users, removeUser, editUser }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h3 style={{ textAlign: "center", padding: "20px" }}>Users List</h3>
      {isEditing && (
        <div className="edit-container">
          <form action="" onSubmit={""}>
            <div>
              <div>
                <label htmlFor="">name:</label>
                <input type="text" name="name" id="name" />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input type="text" name="" id="password" />
              </div>
            </div>
          </form>
        </div>
      )}

      <table className="table-container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User
              user={user}
              key={user.id}
              removeUser={removeUser}
              editUser={editUser}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
