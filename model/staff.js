const mongoose = require ('mongoose');
const staffField = mongoose.Schema({

    sName: {
        type:String
    },

    sDept:{
        type:String
    },

    yearofExp:{
        type:String
    },

    emailId: {
        type:String
    },

    password: {
        type: String
    },
    
    sAddress: {
        type:String
    }

    
})

const staffModel=mongoose.model("staffCollection",staffField);
module.exports=staffModel