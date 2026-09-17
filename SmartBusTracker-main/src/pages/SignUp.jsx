import React from "react";

const SignUp = () => {
  return (
    <div>
      <h2 className="text-center">Create an Account</h2>
      <form>
        <input  type="text" placeholder="Name" required /><br /><br />
        <input type="email" placeholder="Email" required /><br /><br />
        <input type="password" placeholder="Password" required /><br /><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
