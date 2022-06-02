const express = require('express')
const router = express.Router()

const roomController = require('../controllers/rooms')

//GET all the rooms
router.get('/allRooms', (req, res) => {
    roomController.getAllRooms(req, res)
})

//GET rooms with status ready for new guest
router.get('/readyForGuest', (req, res) => {
        roomController.readyForGuest(req,res)
})


//GET rooms that need cleaning 
router.get('/needCleaning', (req, res) => {
    roomController.needCleaning(req,res);
})

//post request creating a new room for testing purposes
//http://localhost:3000/rooms/newRoom?number=123&nameOfGuest=John&roomStatus=occupied&obs=none
router.post('/newRoom', function (req, res) {
    roomController.newRoom(req, res)
});


//PUT request to update a room
//http://localhost:3001/rooms/{roomid}/updateRoom?&nameOfGuest=John&roomStatus=Occupied
router.put('/:id/updateRoom', function (req, res) {
    roomController.updateRoom(req,res)

});
  



  module.exports = router