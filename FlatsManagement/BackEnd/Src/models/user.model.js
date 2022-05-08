const mongoose=require("mongoose");
const bcryptjs=require("bcryptjs");

const UserSchema=new mongoose.Schema({
    name:{type:String},
    gender:{type:String},
    age:{type:Number},
    role:{type:String},  
    email:{type:String},
    password:{type:String},
},
{
    versionKey:false,
    timestamps:true,
});

UserSchema.pre("save",function(next){
    if(!this.isModified('password'))
    next();

    this.password=bcryptjs.hashSync(this.password,8);
    next();
});

UserSchema.methods.checkPassword=function(password){
    return bcryptjs.compareSync(password,this.password);
}

module.exports=mongoose.model("users",UserSchema);