const express = require ('express');
const router = express.Router();

const {staffRegister,getStaff,staffLogin} = require("../controller/staff")

router.post('/staffdetails',staffRegister)
router.get('/getstaffs',getStaff)
router.post('/stafflogin',staffLogin)

module.exports= router;