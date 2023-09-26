const deptModel = require("../model/department");

//post 

const deptName = async (req,res) => {
    const { departmentName,  hoD, yearofEstablish, numberofStaffs, numberofStudents, eMailid ,passWord} =   req.body;
    try {
        await deptModel.create({
          departmentName,  hoD, yearofEstablish, numberofStaffs, numberofStudents, eMailid ,passWord
        });
        res.status(200).send({ status: "Department added Successfully" });
        } 
        catch (error) {
        res.status(400).send({ status: "Error" });
      }
    };

 //get 
 
 const getDepartment = async (req,res)=>{
    try{  
      const deptDetails=await deptModel.find({}); 
        res.send(deptDetails);  
       }catch(error){ 
      console.log(error); 
       }
    }

module.exports = {deptName,getDepartment}