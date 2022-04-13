import { gql } from '@apollo/client';

export const Query_posts = gql`
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
        commentBody
      }
    }
  }
`;