const express = require('express')
const { getData, addData, updateData, deleteData, login, verify } = require('../Controller/userController')
const router = express.Router()

router.get('/get' , getData)
router.post('/add' , addData)
router.patch('/update' , updateData)
router.delete('/delete' , deleteData)
router.post('/login' , login , verify)


module.exports = router