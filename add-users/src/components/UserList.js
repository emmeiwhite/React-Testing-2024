import React from "react";
import User from "./User";

export default function UserList({ users }) {
  return (
    <div className="user-list">
      <h2>User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User
              key={user.id}
              {...user}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
