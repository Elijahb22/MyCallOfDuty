const { Schema } = require('mongoose');
const commentSchema = require('./Comment')

const postSchema = new Schema(
    {
        post: {
            type: String,
            minlength: 1,
            maxlength: 300
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true
        },
        comment: [commentSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
)

module.exports = postSchema;