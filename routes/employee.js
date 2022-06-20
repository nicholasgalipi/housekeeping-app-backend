const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employee')

router.get('/allEmployees', (req, res) => {
    employeeController.getAllEmployees(req, res);
})

router.get('/:id', (req, res) => {
    employeeController.getEmployee(req, res);
})



// POST new employee, room id should be comma separated
//http://localhost:3001/employee/newEmployee?name=Alice
router.post('/newEmployee', function (req, res) {
    employeeController.newEmployee(req, res)
});

//Delete request to dele a employee from the DB
//http://localhost:3001/employee/deleteEmployee?id=1234345
router.delete('/deleteEmployee', function (req, res) {
    employeeController.deleteEmployee(req,res)
});

//PUT request to update a employee assigned rooms
//http://localhost:3001/employee/{employeeID}/addRoom?&roomID={roomid}
router.put('/:id/addRoom', function (req, res) {
    employeeController.updateEmployeeAdd(req,res)

});

//PUT request to remove a room assigned to an employee
//http://localhost:3001/employee/{employeeID}/removeRoom?&roomID={roomid}
router.put('/:id/removeRoom', function (req, res) {
    employeeController.updateEmployeeRemove(req,res)

});





module.exports = router