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
    }
`;

module.exports = typeDefs;