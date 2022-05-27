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

module.exports = {getAllEmployees, newEmployee}