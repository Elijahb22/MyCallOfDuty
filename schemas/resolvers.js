
const { User, Post } = require('../models');
const { post } = require('../models/User');

const resolvers = {
    Query: {
        posts: async () => {
            return post.find().sort({ createdAt: -1 });
          }
    }
}

module.exports = resolvers; 
