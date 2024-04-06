import React from "react";
import User from "./User";

export default function UserList({ users }) {
  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul className="user-grid">
        {users.map((user) => (
          <User
            {...user}
            key={user.id}
          />
        ))}
      </ul>
    </div>
  );
}
