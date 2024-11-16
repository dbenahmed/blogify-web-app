const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 16,
        unique: true,
        trim: true,
        match: [/^[a-zA-Z0-9]+$/, 'please une only letters and numbers and - ']
    },
    passwordHash: {
        type: String,
        required: true,
        unique: true,
    },
    displayName: {
        type: String, required: true, minLength: 6, maxLength: 16, trim: true,
        match: [/^[a-zA-Z0-9]+$/, 'please only use letters and numbers and -']
    },
    email: { type: String, trim: true, lowerCase: true, required: true, unique: true }
})

module.exports = model('Users', userSchema)