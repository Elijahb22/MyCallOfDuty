import React from 'react';
import Comments from '../../components/comments';
import CommentForm from '../../components/commentform'
import Auth from '../../utils/auth'
import { useQuery } from '@apollo/client';
import { Query_post  } from '../../utils/queries';
import { useParams } from 'react-router-dom';

const OnePost = props => {
const { id: postId } = useParams();
const { loading, data } = useQuery(Query_post, {
  variables: { id: postId }
});
const post = data?.post || {};
if (loading) {
  return <div>Loading...</div>;
}

  return (
    <div>
      <div className="card">
        <p className="card-header">
          <span className="">
            {post.username}
          </span>{' '}
          Post {post.createdAt}
        </p>
        <div className="card-body">
          <p>{post.postText}</p>
        </div>
      </div>
      {post.commentCount > 0 && (
        <Comments comments={post.comments}/>
      )}
      {Auth.loggedIn() && <CommentForm postId={post._id} />}
    </div>
  );
};

export default OnePost;