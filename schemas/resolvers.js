
const { User, Post } = require('../models');
const { post } = require('../models/User');

const resolvers = {
    Query: {
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 });
        },
        post: async (parent, { _id }) => {
            return Post.findOne({ _id });
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('friends')
                .populate('posts');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('friends')
            .populate('posts');
        },
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('posts')
                .populate('friends');
      
              return userData;
            }
      
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
          
            return user;
        },
        addPost: async (parent, args, context) => {
            if (context.user) {
              const post = await Post.create({ ...args, username: context.user.username });
          
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { posts: post._id } },
                { new: true }
              );
          
              return post;
            }
        },
        addComment: async (parent, { postId, commentBody }, context) => {
            if (context.user) {
              const updatedPost = await Post.findOneAndUpdate(
                { _id: postId },
                { $push: { comments: { commentBody, username: context.user.username } } },
                { new: true, runValidators: true }
              );
      
              return updatedPost;
            }
    
        },
        
    }
}

module.exports = resolvers; 
