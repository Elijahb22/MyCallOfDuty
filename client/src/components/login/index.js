import React from 'react';

const login = () => {
    return(
        <main className='flex-row justify-center'>
        <div className=''>
          <div className='card'>
            <h4 className='card-header'>Login</h4>
            <div className='card-body'>
              <form>
                <input
                  className='form-input'
                  placeholder='Username'
                  name='username'
                  type='username'
                  id='user'
                />
                <input
                  className='form-input'
                  placeholder='Password'
                  name='password'
                  type='password'
                  id='password'
                />
                <button className='' type='submit'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    )
};

export default login;