import React from "react";
import { Link } from 'react-router-dom';


const comments = (comments) => {
    return (
      <div className="card">
        <div className="card-header">
          <span className="">Comments</span>
        </div>
        <div className="card-body">
        {comments &&
            comments.map(comment => (
                <Link to={`/profile/${comment.username}`} >
                    {comment.username} on {comment.createdAt}
                </Link>
            ))
        }
        </div>
      </div>
    );
};

export default comments;