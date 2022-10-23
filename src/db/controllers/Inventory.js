import mongoose from "mongoose";
import { Inventory } from "../models/Inventory.js";
import moment from "moment/moment.js";
export const addInventory=(req,res)=>{

    console.log(req.body.values)
    const data=req.body.values
    let newInventory=new Inventory({
        id:parseInt(Math.random()*1000),
        date:moment().format(),
        name:data.name,
        amount:data.amount,
        category:data.category
    }) 
    newInventory.save((err,result)=>{
        err&&res.status(500).send(err)
        res.json(result)
    })
}
export const getInventory=(req,res)=>{

    console.log(req.body.values)
    Inventory.find((err,inventory)=>{
        err && res.status(500).send(err.message);
        res.status(200).json(inventory)
    })
   
}

