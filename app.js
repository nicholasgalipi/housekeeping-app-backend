const express = require('express')
const roomsRouter = require('./routes/rooms')



const app = express()
const port = 3000
app.use('/rooms', roomsRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})