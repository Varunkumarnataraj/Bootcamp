const mongoose = require ('mongoose');
const studentField = mongoose.Schema({

    stuName: {
        type:String
    },

    dept:{
        type:String
    },

    regNo:{
        type:Number
    },

    mailId: {
        type:String
    },
    
    spassWord: {
        type: String
    },

    saddress: {
        type:String
    }
    
})

const studentModel=mongoose.model("studentCollection",studentField);
module.exports=studentModel