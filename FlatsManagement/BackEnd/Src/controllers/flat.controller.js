const express=require('express');
const router=express.Router();
const Flat=require("../models/flat.model");

router.get("/",async(req,res)=>{
    try {
        const flat=await Flat.find().lean().exec();
        return res.status(202).send(flat);
    } catch (error) {
        return res.status(401).send(error.message);
    }
});

router.delete("/:id",async(req,res)=>{
    try {
        console.log(req.params.id);
        const flat=await Flat.findOne({_id:req.params.id}).lean().exec();
        return res.status(206).send(flat);
    } catch (error) {
        return res.status(403).send(error.message);
    }
});

router.get("/:id",async(req,res)=>{
    try {
        console.log(req.params.id);
        const flat=await Flat.findOne({_id:req.params.id}).lean().exec();
        return res.status(206).send(flat);
    } catch (error) {
        return res.status(403).send(error.message);
    }
})

router.post("/",async(req,res)=>{
    try {
        const flat=await Flat.create(req.body);
        return res.status(203).send(flat);
    } catch (error) {
        return res.status(402).send(error.message);
    }
});

module.exports=router;
