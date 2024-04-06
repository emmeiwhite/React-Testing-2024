import React, { useState } from "react";

const UserForm = ({ addUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name && !formData.email) return;

    const newUser = {
      ...formData,
      id: new Date().toUTCString(),
    };

    //  Call addUser to add the new user to the App state. My newUser also has an id property, so while writing the assertions I have to keep that in mind as well
    addUser(newUser);

    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a User</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
