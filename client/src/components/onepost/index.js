import React from 'react';
import Comments from '../comments';

const onePost = props => {
  return (
    <div>
      <div className="card">
        <p className="card-header">
          <span className="">
            {post.username}
          </span>{' '}
          Post {thought.createdAt}
        </p>
        <div className="card-body">
          <p>{post.postText}</p>
        </div>
      </div>
      {post.commentCount > 0 && (
        <Comments comments={thought.comments}/>
      )}
    </div>
  );
};

export default onePost;