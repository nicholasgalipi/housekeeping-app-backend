const Room = require('../models/roomModel')




const getAllRooms = async (req, res) => {
    try{
        const arr = await Room.find();
        res.status(200).json(arr)
    }catch (err){
        console.log(err)
        res.status(400).send("Error, no room has been created on the db")
    }
}



const needCleaning = async (req, res) => {
    const arr = await Room.find({ roomStatus: "Waiting for cleaning" });
    res.status(200).json(arr);
}

const readyForGuest = async (req, res) => {
    const arr = await Room.find({ roomStatus: "Ready for guest" });
    res.status(200).json(arr);
}


const newRoom = async (req, res) => {

    const {number, nameOfGuest, roomStatus, obs} = req.query;
   
    await Room.create({ 
        number: number, 
        nameOfGuest: nameOfGuest,
        roomStatus: roomStatus,
        obs: obs
 });
    res.send('POST new room ok!');
}



const updateRoom = async (req, res) => {
    //const arr = await Room.find({ _id: req.params.id });
   
    const {nameOfGuest, roomStatus, obs} = req.query;


    try{
        await Room.replaceOne({ _id: req.params.id }, { 
            nameOfGuest: nameOfGuest,
            roomStatus: roomStatus,
            obs: obs 
        });

        res.status(200).send(`Updated room ${req.params.id}`);
    }catch (err) {
        res.status(400).send("Something went wrong" + err)
    }
    


}

 

module.exports = {getAllRooms, newRoom, needCleaning, readyForGuest, updateRoom}