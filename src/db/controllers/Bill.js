import mongoose from "mongoose";
import {Bill} from '../models/Bill.js'
//Encontrar todos facturas
export const findAllBill = (req,res)=>{
    Bill.find((err,bills)=>{
        err && res.status(500).send(err.message);
        res.status(200).json(bills)
    })

}
//Encontrar un factura por el id
export const findById=(req,res)=>{
    Bill.findById(req.params.id,(err,user)=>{
        err&&res.status(500).send(err.message)
        res.status(200).json(user)
    })
}
//Añadir facturas
export const addBill=(req,res)=>{

    console.log(req.body.newBill)
    const data=req.body.newBill
    res.send("fine")
    let newBill = new Bill({
        date:data.date,
        serial:data.serial,
        value:data.value,
        type:data.type
    })
   newBill.save((err,bill)=>{
    err&&res.status(500).send(err.message)
    res.status(200)
   })
}
