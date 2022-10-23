import { Inventory } from "../models/Inventory.js"
import { Bill } from "../models/Bill.js"
import { Work } from "../models/Work.js"
import moment from "moment"
export const addWork=(req,res)=>{
    console.log(req.body)
    const ValuesBill=req.body.values
    const Lista=req.body.lista

    Lista?.map((i,index)=>{
        let cantidad=0
        Inventory.findById(i.value,(err,itemInventory)=>{
        //console.log(itemInventory ) 
        err&&res.send("No se encontro el id del item del inventario")
        console.log(parseInt(i.amount)-parseInt(itemInventory.amount))
        if(parseInt(itemInventory.amount) -parseInt(i.amount)<0){
            cantidad=0
        }else{
            cantidad=parseInt(itemInventory.amount) -parseInt(i.amount)
        }
        Inventory.update({_id:itemInventory._id},{$set:{
            amount:cantidad
            }},(err,result)=>{
        err&&res.status(500).send(err.message)
        console.log(result)
       if(index===Lista.length-1){
        let newBill = new Bill({
            id:parseInt(Math.random()*1000),
            date:moment().format(),
            serial:ValuesBill.serial,
            value:ValuesBill.costo,
            type:'Ingreso'
        })
        newBill.save((err,bill)=>{
            if(err){
                err&&res.status(500).send(err.message)
            }else{
               let newWork=new Work({
                lista:Lista,
                costo:ValuesBill.costo,
                nameWork:ValuesBill.nameWork,
                serial:ValuesBill.serial,
               })
               newWork.save((err,work)=>{
                err&&res.status(500).send(err.message)
                res.send(200)
               })
            }
        
           
           })
       }
        })
    })
        
    })
  
}