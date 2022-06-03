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
//http://localhost:3001/employee/newEmployee?name=Alice&r//oomsAssigned=627c1a18d00e7a725ec27b27,627c1c47bfe8744b30422e04
router.post('/newEmployee', function (req, res) {
    employeeController.newEmployee(req, res)
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