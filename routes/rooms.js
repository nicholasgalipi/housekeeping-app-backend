const express = require('express')
const router = express.Router()

const roomController = require('../controllers/rooms')

//GET all the rooms
router.get('/allRooms', (req, res) => {
    roomController.getAllRooms(req, res)
})

//GET rooms with status ready for new guest
router.get('/readyForGuest', (req, res) => {
        res.status(200).send({test: "ready rooms"})
})


//GET rooms that need cleaning 
router.get('/needCleaning', (req, res) => {
    res.send({test: "need cleaning  rooms"})
})

//post request creating a new for testing purposes
//http://localhost:3000/rooms/newRoom?number=123&nameOfGuest=John&roomStatus=occupied&obs=none
router.post('/newRoom', function (req, res) {
    roomController.newRoom(req, res)
});

app.put('/:id', function (req, res) {
    res.send('Got a PUT request at /user');
});
  



  module.exports = router