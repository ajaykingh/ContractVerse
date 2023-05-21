import React, { useState } from 'react';

const PasswordRecoveryPage = () => {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Send password reset instructions to the entered email
    setResetSent(true);
  };

  return (
    <div>
      <h1>Password Recovery</h1>
      {resetSent ? (
        <p>
          Password reset instructions have been sent to your email. Please check your inbox.
        </p>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} required />
          </label>
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
};

export default PasswordRecoveryPage;
