import React, { useState } from 'react';

function ManageProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  }

  const handleEmailChange = event => {
    setEmail(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`);
  }

  return (
    <div>
      <h2>Manage Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default ManageProfile;
