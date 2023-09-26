const staffModel = require("../model/staff");

//post 

const staffRegister = async (req,res) => {
    const { sName,  sDept, yearofExp, emailId, password, sAddress} =   req.body;
    try {
        await staffModel.create({
          sName,  sDept, yearofExp, emailId, password, sAddress
        });
        res.status(200).send({ status: "Staff added Successfully" });
        } 
        catch (error) {
        res.status(400).send({ status: "Error" });
      }
    };

 //get 
 
 const getStaff = async (req,res)=>{
    try{  
      const staffDetails=await staffModel.find({}); 
        res.send(staffDetails);  
       }catch(error){ 
      console.log(error); 
       }
    }

//post login

const staffLogin =async (req,res)=>{
    const { emailId, password } = req.body;
    const staff = await staffModel.findOne({ emailId });

    if (!emailId) {
    return res.json({ message: "Please enter your Email" });
  }
   if (!password) {
    return res.json({ message: "Please enter your Password" });
  }  
  if(!staff){
    return res.json({ message: "Incorrect Email id" });
  }
  if(password == staff.password){
    res.send({message:"Login Successfully"})
  }else{
    res.send({message:"Incorrect Password"})
  }

}




    module.exports={staffRegister,getStaff ,staffLogin}