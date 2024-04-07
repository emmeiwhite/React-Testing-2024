import React from "react";

export default function User({ id, name, email }) {
  return (
    <tr className="user">
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
}
