import React from 'react';
import { Link } from 'react-router-dom';

const Friends = ({ friendCount, username, friends }) => {
    if (!friends || !friends.length) {
        return <p className="">{username} add friends!</p>;
    }
    
    return (
      <div>
        <h5>
            {username}'s {friendCount} {friendCount === 1 ? 'friend' : 'friends'}
        </h5>
        <button>
            <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
        </button>
      </div>
    )
};
  
export default Friends;