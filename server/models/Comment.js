const { Schema } = require('mongoose');

const commentSchema = new Schema(
    {
        comment: {
            type: String,
            maxlength: 200,
            required: true
        },
        username: {
            type: String,
            required: true
        }, 
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = commentSchema;