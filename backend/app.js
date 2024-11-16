const mongoose = require('mongoose')
const express = require('express')
require("dotenv").config()

const app = express()

app.use('/', (req, res) => {
    res.send('done')
})

const connect = () => {
    app.listen(5000, async () => {
        try {
            const uri = process.env.MONGODB_URI
            if (!uri) { throw ('uri unvalid') }
            await mongoose.connect(uri)
            console.log('server connected')
        } catch (e) { console.log(e) }
    })
}

connect()