import React, { useState } from "react";
import Button from "../Button";

const User = ({ user, removeUser, editUser, isEditing, setIsEditing }) => {
  return (
    <tr>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.password}</td>
      <td className="td-action">
        <p>
          <Button
            onClick={() => removeUser(user.id)}
            className="btn-danger"
            content="Remove"
          />
        </p>
        <p>
          <Button
            content={isEditing ? "save" : "Edit"}
            onClick={() => setIsEditing(!isEditing)}
            className="btn-edit"
          ></Button>
        </p>
      </td>
    </tr>
  );
};

export default User;
