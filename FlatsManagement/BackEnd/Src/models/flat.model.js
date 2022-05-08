const mongoose=require("mongoose");

const FlatSchema = new mongoose.Schema({
    type:{type:String},
    block:{type:String},
    flatNo:{type:Number},
    manager:{type:String},
    img:{type:String},
    // role:{type:mongoose.Schema.Types.ObjectId,ref:"usesr"},
});

module.exports=mongoose.model("flats",FlatSchema);
