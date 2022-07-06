import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Add_user } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(Add_user);
  const change = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };
  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState }
      });
      Auth.login(data.addUser.token);
    } catch (e) {
        console.error(e);
    }
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
            {error && <div>Sign up failed</div>}
          </div>
        </div>
    </main>
  );
};

export default Signup;