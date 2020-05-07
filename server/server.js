const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()
const port = process.env.port || 5000
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log("DB Connected")
    })
    .catch(err => console.log("Error: " + err))
const todosRoute = require('./routes/todos')
app.use('/todos', todosRoute)
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})