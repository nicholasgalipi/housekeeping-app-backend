const Employee = require('../models/employeeModel')


const getAllEmployees = async (req, res) =>{
    try{
        const arr = await Employee.find();
        res.status(200).json(arr)
    }catch (err){
        console.log(err)
        res.status(400).send("Error, no employee has been created in the db")
    }

}


const newEmployee = async (req, res) => {

    const {name, roomsAssigned} = req.query;
    
    const arr = roomsAssigned.split(',')
    
    await Employee.create({ 
        name: name, 
        roomsAssigned: arr,
});
    res.send('POST new employee ok!');
}


const updateEmployeeAdd = async (req, res) => {
    const emp = await Employee.find({ _id: req.params.id });

    if(emp.length < 1){  res.status(400).send("ID not found in the database")} 
    
    const {roomsAssigned, name} = emp[0]
    const { roomID } = req.query;

    const udpatedRooms = [roomID, ...roomsAssigned]
   
    try{
        await Employee.replaceOne({ _id: req.params.id }, { 
            name: name,
            roomsAssigned: udpatedRooms
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
        await Employee.replaceOne({ _id: req.params.id }, { 
            name: name,
            roomsAssigned: udpatedRooms
        });
        res.status(200).send(`Updated Employee ${req.params.id}`);
    }catch (err) {
        res.status(400).send("Something went wrong" + err)
    }
    


}

module.exports = {getAllEmployees, newEmployee,updateEmployeeAdd, updateEmployeeAdd, updateEmployeeRemove}