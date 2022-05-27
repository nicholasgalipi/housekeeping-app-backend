const express = require('express')
const dotenv = require('dotenv').config()
const roomsRouter = require('./routes/rooms')
const employeeRouter = require('./routes/employee')
const connectDB = require('./config/db')
var cors = require('cors')


connectDB();

const app = express()
const port = 3001
app.use(cors())
app.use('/rooms', roomsRouter)
app.use('/employee', employeeRouter )

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Housekeeping app started on port ${port}`)
})
