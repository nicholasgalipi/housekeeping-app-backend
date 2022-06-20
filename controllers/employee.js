const Employee = require('../models/employeeModel')
const Room = require('../models/roomModel')

const getAllEmployees = async (req, res) =>{
    try{
        const arr = await Employee.find();
        res.status(200).json(arr)
    }catch (err){
        console.log(err)
        res.status(400).send("Error, no employee has been created in the db")
    }

}

const getEmployee= async (req, res) =>{
    
    
    
    try{
        let employee = await Employee.findOne({ _id: req.params.id });
        const allRooms = await Room.find();
        let roomsID = employee.roomsAssigned
        let roomsAssignedNumber = []
        
        for (let index = 0; index < roomsID.length; index++) {
           let filter = allRooms.filter((room) => { return  roomsID[index] === room._id.valueOf()})
           roomsAssignedNumber.push(filter[0])
        }

        roomsAssignedNumber = roomsAssignedNumber.map( (room) => {return room.number})
        
        final = {
            _id: employee._id,
            name: employee.name,
            roomsAssigned: employee.roomsAssigned,
            roomsAssignedNumber: roomsAssignedNumber
        }       
        res.status(200).json(final);
    }catch (err){
        console.log(err)
        res.status(400).send("Error, no such employee")
    }

}


const newEmployee = async (req, res) => {

    const {name} = req.query;
    
    await Employee.create({ 
        name: name, 
        roomsAssigned: [],
});
    res.send('POST new employee ok!');
}

const deleteEmployee = async (req, res) => {

    const {id} = req.query;
    
    try{
        await Employee.deleteOne({ 
            _id: id
        });
        res.send('DELTE employee ok!');
    } catch(err){
        res.send('Error');
    }
    
}

const updateEmployeeAdd = async (req, res) => {
    const emp = await Employee.find({ _id: req.params.id });

    if(emp.length < 1){  res.status(400).send("ID not found in the database")} 
    
    const {roomsAssigned, name} = emp[0]
    const { roomID } = req.query;

    const updatedRooms = [roomID, ...roomsAssigned]
   
    try{
        await Employee.updateOne({ _id: req.params.id }, { 
            name: name,
            roomsAssigned: updatedRooms
        });
        res.status(200).send(`Updated Employee ${req.params.id}`);
    }catch (err) {
        res.status(400).send("Something went wrong" + err)
    }
    
}

const updateEmployeeRemove = async (req, res) => {
    const emp = await Employee.find({ _id: req.params.id });

    if(emp.length < 1){  res.status(400).send("ID not found in the database")} 
    
    const {roomsAssigned, name} = emp[0]
    const { roomID } = req.query;

    const udpatedRooms = roomsAssigned.filter( (room) => { return room !== roomID})

    try{
        await Employee.updateOne({ _id: req.params.id }, { 
            name: name,
            roomsAssigned: udpatedRooms
        });
        res.status(200).send(`Updated Employee ${req.params.id}`);
    }catch (err) {
        res.status(400).send("Something went wrong" + err)
    }
    


}

module.exports = {deleteEmployee, getAllEmployees, getEmployee,newEmployee,updateEmployeeAdd, updateEmployeeAdd, updateEmployeeRemove}