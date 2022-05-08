const express=require("express");
const app=express();
const cors=require('cors');
const connect=require("./configs/db");

app.use(express.json());
app.use(cors());

const Port=2345;

const { Register,LogIn }=require("./controllers/user.controller");
const FlatController=require("./controllers/flat.controller");

app.use("/register",Register);
app.use("/logIn",LogIn);
app.use("/flat",FlatController);



app.listen(Port,async()=>{
    try {
        await connect();
        console.log(`Listening on port ${Port}`);
    } catch (error) {
        console.log(error.message);  
    }
});

