const { Schema, model } = require('mongoose')

const bodySchema = new Schema({
    type: {
        type: String,
        enum: ['p', 'div', 'span', 'a', 'strong', 'em',
            'ul', 'ol', 'li',
            'img', 'video', 'audio',
            'table', 'tr', 'th', 'td',
            'form', 'input', 'button', 'select', 'textarea'],
        required: true,
    },
    content: { type: String, required: true, minLength: 1 }
})

const articleSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    articleBody: { type: [bodySchema], required: true },
    postedAt: { type: Date, required: true, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() }
})

module.exports = model('Article', articleSchema)

