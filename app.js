const express = require('express')
const app = express()
const task = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()



app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello smart')
})

app.use('/api/v1/tasks', task)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5500, () => {
        })


    } catch (error) {

    }
}
start()

