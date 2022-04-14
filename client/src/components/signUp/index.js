import React from 'react';

const Signup = () => {
  const handleFormSubmit = async event => {
    event.preventDefault();
  };

  return (
    <main className="flex-row justify-center">
        <div className="card">
          <h4 className="">Sign Up</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input className="form-input" placeholder="Your username" name="username" type="username"id="username"/> 
              <input className="form-input" placeholder="Your email" name="email" type="email" id="email"/>
              <input className="form-input" placeholder="Password" name="password" type="password" id="password"/>
              <button className="btn" type="submit">Submit</button>
            </form>
          </div>
        </div>
    </main>
  );
};

export default Signup;