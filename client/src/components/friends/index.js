import React from 'react';
import { Link } from 'react-router-dom';

const Friends = () => {
  
    return (
      <div>
        <h5>
          friendCount
        </h5>
        <button>
            <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
        </button>
      </div>
    )
};
  
export default Friends;