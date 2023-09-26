const userModel = require("../model/user")



//post 

const register = async (req,res) => {
    const { Name,  Mailid, Password} =   req.body;
    try {
        await userModel.create({
            Name,  Mailid, Password 
        });
        res.status(200).send({ status: "User added Successfully" });
        } 
        catch (error) {
        res.status(400).send({ status: "Error" });
      }
    };


//get

const getUser = async (req,res)=>{
    try{  
      const Userdetails=await userModel.find({}); 
        res.send(Userdetails);  
       }catch(error){ 
      console.log(error); 
       }
    }

//update
const updateUser = async (req,res)=>{
    const _id =req.params.id
    const { Name,  Mailid, Password} =   req.body;
    try{
        const updateuser=await userModel.findByIdAndUpdate(_id,{Name,Mailid,Password});
        res.send(updateuser);
    }catch(e){
      res.status(400).send(e);
    }
  }


  //delete

  const deleteUser = async (req,res) =>{
    const _id =req.params.id
    try{
      const Userdel = await userModel.findByIdAndDelete(_id);
      if(!req.params.id){
        return res.status(400).send({message:"error"});
      }
      res.send({message:"User Deleted"});
    }catch(e){
      res.status(500).send(e);
    }
  }

module.exports = {register,getUser,updateUser,deleteUser}