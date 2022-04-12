const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Post {
        _id: ID
        postText: String
        createdAt: String
        username: String
        commentCount: Int
}   
    type Query {
        posts: [Post]
    }
`;

module.exports = typeDefs;