import React from 'react';

function SignupPage() {
  return (
    <main>
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Sign Up</button>
      </form>
    </main>
  );
}

export default SignupPage;
