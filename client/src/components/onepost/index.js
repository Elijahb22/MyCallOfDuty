import React from 'react';

const onePost = props => {
  return (
    <div>
      <div className="card">
        <p className="card-header">
          <span className="text">
            Username
          </span>{' '}
          post createdAt
        </p>
        <div className="card-body">
          <p>Post Text</p>
        </div>
      </div>
    </div>
  );
};

export default onePost;