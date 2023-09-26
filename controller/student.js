const studentModel = require("../model/students");

//post 

const studentRegister = async (req,res) => {
    const { stuName,  dept, regNo, mailId, spassWord, saddress} =   req.body;
    try {
        await studentModel.create({
          stuName,  dept, regNo, mailId, spassWord, saddress
        });
        res.status(200).send({ status: "Student added Successfully" });
        } 
        catch (error) {
        res.status(400).send({ status: "Error" });
      }
    };

 //get 
 
 const getStudent = async (req,res)=>{
    try{  
      const studentDetails=await studentModel.find({}); 
        res.send(studentDetails);  
       }catch(error){ 
      console.log(error); 
       }
    }

//post login

const studentLogin =async (req,res)=>{
    const { mailId, spassWord } = req.body;
    const student = await studentModel.findOne({ mailId });
    if (!mailId) {
    return res.json({ message: "Please enter your Email" });
  }
   if (!spassWord) {
    return res.json({ message: "Please enter your Password" });
  } 
  if(!student){
    return res.json({ message: "Incorrect Email id" });
  }
  if(spassWord === student.spassWord){
    res.send({message:"Login Successfully"})
  }else{
    res.send({message:"Incorrect Password"})
  }

}




  module.exports={studentRegister,getStudent ,studentLogin}