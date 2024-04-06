import React from "react";

export default function User({ id, name, email }) {
  return (
    <li className="user">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </li>
  );
}
