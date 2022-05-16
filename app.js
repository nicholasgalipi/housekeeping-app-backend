const express = require('express')
const dotenv = require('dotenv').config()
const roomsRouter = require('./routes/rooms')
const connectDB = require('./config/db')


connectDB();

const app = express()
const port = 3000
app.use('/rooms', roomsRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Housekeeping app started on port ${port}`)
})