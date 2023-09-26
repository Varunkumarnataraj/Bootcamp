const mongoose = require ('mongoose');
const Userfield = mongoose.Schema({

    Name: {
        type:String
    },

    Mailid: {
        type:String
    },

    Password: {
        type: String
    }
})

const userModel=mongoose.model("UserCollection",Userfield);
module.exports=userModel