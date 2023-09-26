const mongoose = require ('mongoose');
const deptField = mongoose.Schema({

    departmentName: {
        type:String
    },

    hoD:{
        type:String
    },

    yearofEstablish:{
        type:Number
    },

    numberofStaffs:{
        type:Number
    },

    numberofStudents:{
        type:Number
    },

    eMailid: {
        type:String
    },

    passWord: {
        type: String
    }
    
})

const deptModel=mongoose.model("deptCollection",deptField);
module.exports=deptModel