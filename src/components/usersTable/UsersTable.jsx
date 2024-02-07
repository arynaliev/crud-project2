import React from "react";
import "./usersTable.style.css";

const UsersTable = ({ usersList, deleteHandler }) => {
  return (
    <div className="table-container">
      <table className="users-table">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Website</td>
          </tr>
        </thead>
        <tbody>
          {usersList.map((el, index) => (
            <tr key={index}>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{el.email}</td>
              <td>{el.phone}</td>
              <td>{el.website}</td>
              <td>
                <button onClick={() => deleteHandler(el.id)}>x</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
