const User=require("../models/user.model");

const jwt = require('jsonwebtoken');

const newToken=(user)=>{
    return jwt.sign({ user },"dummy");
}

const Register=async(req,res)=>{
    try{
        let user=await User.findOne({email:req.body.email}).lean().exec();

        if(user)
        return res.status(400).send({status:0});
     
         user=User.create(req.body);
     
         const token=newToken(user);
     
         return res.status(200).send({token,status:1});
    }catch(error){
        return res.status(404).send(error.meassage);
    }
}

const LogIn=async(req,res)=>{
    try {
        let user=await User.findOne({email:req.body.email});
        if(!user)
        return res.status(401).send({status:0});
        
        const check=user.checkPassword(req.body.password);
        if(check==false){
            return res.status(402).send({status:0});
        }

        const token = newToken(user);
        return res.status(202).send({token,status:1})
    } catch (error) {
        return res.status(501).send(error.message);
    }
}

module.exports={LogIn,Register};