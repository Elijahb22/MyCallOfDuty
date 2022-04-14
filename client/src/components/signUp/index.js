import React, { useState } from 'react';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const change = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };
  const handleFormSubmit = async event => {
    event.preventDefault();
  };

  return (
    <main className="flex-row justify-center">
        <div className="card">
          <h4 className="">Sign Up</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input className="form-input" placeholder="Your username" name="username" type="username"id="username" value={formState.username} onChange={change}/> 
              <input className="form-input" placeholder="Your email" name="email" type="email" id="email" value={formState.email} onChange={change}/>
              <input className="form-input" placeholder="Password" name="password" type="password" id="password" value={formState.password} onChange={change}/>
              <button className="btn" type="submit">Submit</button>
            </form>
          </div>
        </div>
    </main>
  );
};

export default Signup;