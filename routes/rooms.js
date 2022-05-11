const express = require('express')
const router = express.Router()

const roomController = require('../controllers/rooms')

//GET all the rooms
router.get('/allRooms', (req, res) => {
    roomController.getAllRooms(req, res)
})

//GET rooms with status ready for new guest
router.get('/readyForGuestRooms', (req, res) => {
    
    res.status(200).send({test: "ready rooms"})
})


//GET rooms that need cleaning 
router.get('/needCleaningRooms', (req, res) => {
    res.send({test: "need cleaning  rooms"})
})


router.post('/newRoom', function (req, res) {
    roomController.newRoom(req, res)
});



  module.exports = router