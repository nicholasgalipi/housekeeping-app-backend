const Room = require('../models/roomModel')




const getAllRooms = async (req, res) => {

    const arr = await Room.find();
    console.log(arr)
    res.status(200).send({test: "ready rooms"})
    console.log(req.query)
}

const newRoom = async (req, res) => {

    const {number, nameOfGuest, roomStatus, obs} = req.query;
   
    await Room.create({ 
        number: number,
        nameOfGuest: nameOfGuest,
        roomSatus: roomStatus,
        obs: obs
 });

    res.send('POST new room ok!');


}


module.exports = {getAllRooms, newRoom}