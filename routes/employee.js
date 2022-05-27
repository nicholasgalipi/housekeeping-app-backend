const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employee')

router.get('/allEmployees', (req, res) => {
    employeeController.getAllEmployees(req, res);
})



// POST new employee, room id should be comma separated
router.post('/newEmployee', function (req, res) {
    employeeController.newEmployee(req, res)
});

module.exports = router