const Room = require('../models/roomModel')
const Employee = require('../models/employeeModel')



const getAllRooms = async (req, res) => {
    try{
        const arr = await Room.find();
        res.status(200).json(arr)
    }catch (err){
        console.log(err)
        res.status(400).send("Error, no room has been created on the db")
    }
}

const getOneRoom = async (req, res) => {
    const arr = await Room.findOne({ _id: req.params.id });
    
    res.status(200).json(arr);
}

const getRoomByNumber = async (req, res) => {
    const {roomNumber} = req.query;
    console.log(req.query)
    const arr = await Room.findOne({ number: roomNumber });
    
    res.status(200).json(arr);
}

const needCleaning = async (req, res) => {
    const arr = await Room.find({ roomStatus: "Waiting cleaning" });
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
   
    const {nameOfGuest, roomStatus, obs, assigned, assignedTo} = req.query;


    try{
        await Room.updateOne({ _id: req.params.id }, { 
            nameOfGuest: nameOfGuest,
            roomStatus: roomStatus,
            obs: obs,
            assigned: assigned,
            assignedTo: assignedTo
        });
        
        if(assignedTo){
            const emp = await Employee.find({ _id: assignedTo });
            const {roomsAssigned} = emp[0]
            let updatedRooms =[]
            if(roomsAssigned.includes(req.params.id) == false){
                updatedRooms = [req.params.id, ...roomsAssigned]
                await Employee.updateOne({ _id: assignedTo}, { 
                    roomsAssigned: updatedRooms
                });
            }
        }
        res.status(200).send(`Updated room ${req.params.id}`);
    }catch (err) {
        res.status(400).send("Something went wrong" + err)
    }
    


}

 

module.exports = {getAllRooms, newRoom, needCleaning, readyForGuest, updateRoom, getOneRoom,getRoomByNumber}