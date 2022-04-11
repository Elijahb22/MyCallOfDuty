const { Schema, model } = require('mongoose');

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
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)

module.exports = postSchema;