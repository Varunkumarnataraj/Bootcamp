const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
const dotenv = require ('dotenv');
dotenv.config();
const userRouter = require('./routes/user')
const studentRouter = require('./routes/student')
const staffRouter = require('./routes/staff')
const deptRouter =require('./routes/department')

mongoose.connect(process.env.URI)
.then(()=>{
   console.log("Database Connected")
}
);
app.use(express.json());

app.listen(process.env.PORT ,()=>{
   console.log(`server started ${process.env.PORT}`);
   });


app.use("/staff",staffRouter)

app.use("/user",userRouter)

app.use("/student",studentRouter)

app.use("/department", deptRouter)