import React from "react";

const Post = ({ posts, title }) => {
    
    return (
      <div>
        <h3>{title}</h3>
        {posts &&
          posts.map(post => (
            <div key={post._id} className="card">
              <p className="card-header">
                {post.username}
                Post on {post.createdAt}
              </p>
              <div className="card-body">
                <p>{post.postText}</p>
                <p className="">
                  Comments: {post.commentCount} || Click to{' '}
                  {post.commmentCount ? 'view' : 'start'} comment!
                </p>
              </div>
            </div>
          ))}
      </div>
    );
};
  
export default Post;