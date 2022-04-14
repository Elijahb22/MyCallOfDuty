import React from "react";
import { Link } from "react-router-dom";

const Post = ({ posts, title }) => {
    
    return (
      <div>
        <h3>{title}</h3>
        {posts &&
          posts.map(post => (
            <div key={post._id} className="card">
              <p className="card-header">
                <Link to={`/profile/${post.username}`}>
                  {post.username}
                </Link>
                Post on {post.createdAt} 
              </p>
              <div className="card-body">
                <Link to={`/post/${post._id}`}>
                <p>{post.postText}</p>
                <p className="">
                  Comments: {post.commentCount} || Click to{' '}
                  {post.commmentCount ? 'view' : 'start'} comment!
                </p>
                </Link>
              </div>
            </div>
          ))}
      </div>
    );
};
  
export default Post;