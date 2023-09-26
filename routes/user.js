const express = require ('express');
const router = express.Router();


const {register,getUser,updateUser,deleteUser} = require ("../controller/user")

router.post("/post",register);
router.get("/get",getUser);
router.put("/put/:id",updateUser);
router.delete("/delete/:id",deleteUser);

module.exports= router;