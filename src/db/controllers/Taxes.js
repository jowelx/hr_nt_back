import mongoose from "mongoose";
import { Taxes } from "../models/Taxes.js";
export const getTaxes=(req,res)=>{
  
        Taxes.find((err,result)  =>{
         err && res.status(500).send(err.message);
        res.status(200).json(result)
        })
}

export const updateTaxes=(req,res)=>{

    console.log(req.body)
    const id=req.body.id.id
    if(id){
        Taxes.update({_id:id},{$set:{
            debitoFiscal:req.body.id.debitoFiscal,
            creditoFiscal:req.body.id.creditoFiscal,  
    }},(err,result)=>{
    err&&res.status(500).send(err.message)
    console.log(result)
    res.json({
        id:id,
        debitoFiscal:req.body.id.debitoFiscal,
        creditoFiscal:req.body.id.creditoFiscal,  
    })
    })
    }else{
    let newTaxes=new Taxes({
      debitoFiscal:req.body.id.debitoFiscal,
      creditoFiscal:req.body.id.creditoFiscal, 
    })
  newTaxes.save((err,result)=>{
    console.log(result)
    err && res.status(500).send(err.message);
    res.json( {     
      id:result.id,
      debitoFiscal:req.body.id.debitoFiscal,
      creditoFiscal:req.body.id.creditoFiscal
     })
  })
}
}