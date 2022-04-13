import { gql } from '@apollo/client';

export const query_posts = gql`
  query posts($username: String) {
    posts(username: $username) {
      _id
      postText
      createdAt
      username
      commentCount
      comment {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;