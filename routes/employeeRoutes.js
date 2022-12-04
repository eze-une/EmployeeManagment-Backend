const express = require('express')
const router = express.Router()
// const {protect}=require('../middleware/authMiddleware')
const { getEmployee,getOneEmployee,createEmployee,updateEmployee,deleteEmployee } = require('../controllers/employeeController')

router.route('/').get(getEmployee).post(createEmployee)
router.route('/:id').get(getOneEmployee).put(updateEmployee).delete(deleteEmployee)

module.exports = router 