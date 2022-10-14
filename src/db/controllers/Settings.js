import mongoose from "mongoose";
import { Settings } from "../models/Settings.js";
export const addSettings=(req,res)=>{

    console.log(req.body)
  //  res.send("fine")
    let newSettings = new Settings({
        category:req.body.newCategory
    })
   newSettings.save((err,settings)=>{
    err&&res.sendStatus(500).send(err.message)
    res.sendStatus(200)
   })
}
export const allSettings=(req,res)=>{
    Settings.find((err,sttings)=>{
        err && res.status(500)
        res.status(200).json(sttings)
    })
}
export const editSettings=(req,res)=>{
 

        console.log(req.body)
        const id=req.body.values.id
        Settings.update({_id:id},{$set:{
                category:req.body.values.category,  
        }},(err,result)=>{
        err&&res.status(500).send(err.message)
        console.log(result)
        res.json({
            id:id,
            category:req.body.values.category,
        })
        })
}
export const deleteSettings=async(req,res)=>{
 
    try{
        const id=req.body.values.id
    console.log(id)
   
    let setting=  Settings.findById(id)
    await setting.remove()
    res.send({data:"fakiu"})
    }
    catch{
        res.status(500).send({error:'book is not found'})
    }
}

