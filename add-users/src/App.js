import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
export default function App() {
  const [users, setUsers] = useState([]);
  // Child to Parent Communication
  const addUser = (user) => {
    console.log("New User Added");
    setUsers((users) => {
      return [...users, user];
    });
  };
  return (
    <div className="container">
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}
