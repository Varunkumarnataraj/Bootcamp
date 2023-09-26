const express = require ('express');
const router = express.Router();

const {deptName,getDepartment} = require("../controller/department")

router.post('/deptdetails',deptName)
router.get('/getdept',getDepartment)


module.exports= router;