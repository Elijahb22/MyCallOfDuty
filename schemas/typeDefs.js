const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        post: [Post]
        friends: [User]
    }
`;

module.exports = typeDefs