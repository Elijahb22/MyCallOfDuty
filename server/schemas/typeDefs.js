const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Post {
        _id: ID
        postText: String
        createdAt: String
        username: String
        commentCount: Int
    }
    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        posts: [Post]
        friends: [User]
    }
    type Query {
        post(_id: ID!): Post
        posts(username: String): [Post]
        users: [User]
        user(username: String!): User
        me: User
    }
    type Mutation {
        addPost(postText: String!): Post
        addComment(postId: ID!, commentBody: String!): Post
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addFriend(friendId: ID!): User
    }
    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;