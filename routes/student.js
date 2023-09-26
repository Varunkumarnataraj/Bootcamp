const express = require ('express');
const router = express.Router();

const {studentRegister,getStudent,studentLogin} = require("../controller/student")

router.post('/studentdetails',studentRegister)
router.get('/getstudents',getStudent)
router.post('/studentlogin',studentLogin)

module.exports= router;