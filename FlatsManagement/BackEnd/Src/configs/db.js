const mongoose=require("mongoose");

module.exports=()=>{
  return  mongoose.connect("mongodb+srv://sahil:munjhalji9874@cluster0.rgxwz.mongodb.net/flatManagement?retryWrites=true&w=majority")
}