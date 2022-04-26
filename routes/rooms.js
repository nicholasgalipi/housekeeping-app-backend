const express = require('express')
const router = express.Router()


router.get('/allRooms', (req, res) => {
    res.send({test: "all rooms"})
})
router.get('/readyForGuestRooms', (req, res) => {
    res.send({test: "ready rooms"})
})
router.get('/needCleaningRooms', (req, res) => {
    res.send({test: "need cleaning  rooms"})
})
  



  module.exports = router