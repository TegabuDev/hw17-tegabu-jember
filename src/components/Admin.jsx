import React, { useState } from "react";
import { storageService } from "../services/storageService";
import UsersList from "./users/UsersList";

const Admin = () => {
  const [users, setUsers] = useState(storageService.getUsers());

  const removeUser = (userId) => {
    const updatedUser = users.filter((user) => user.id !== userId);
    setUsers(updatedUser);
    storageService.saveUsers(updatedUser);
  };

  const editUser = () => {};

  return (
    <div>
      <UsersList users={users} removeUser={removeUser} editUser={editUser} />
    </div>
  );
};

export default Admin;
