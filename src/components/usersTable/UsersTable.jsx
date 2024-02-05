import React from "react";
import "./usersTable.style.css";

const UsersTable = ({ usersList }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Website</td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default UsersTable;
