const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require ('./middleware/not-found')
const errorHandlerMiddleware = require ('./middleware/error-handler')




app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use( errorHandlerMiddleware)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5500, () => {
        })


    } catch (error) {

    }
}
start()

