import React, { useState } from 'react';

const Loginn = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic here with username and password
    console.log('Logging in...');
    console.log('Username:', username);
    console.log('Password:', password);
    // Clear form fields
    setUsername('');
    setPassword('');
    // Close modal
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Login</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <label>
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} />
              </label>
              <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
              </label>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loginn;
