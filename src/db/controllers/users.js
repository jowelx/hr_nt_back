import mongoose from "mongoose";
import {User} from '../models/User.js'

export const findAllUsers = (req,res)=>{
    User.find((err,users)=>{
        err && res.status(500).send(err.message);
        res.status(200).json(users)
    })

}
export const findById=(req,res)=>{
    User.findById(req.params.id,(err,user)=>{
        err&&res.status(500).send(err.message)
        res.status(200).json(user)
    })
}
export const addUser=(req,res)=>{

    let user = new User({
        name:req.body.name,
        userName:req.body.userName,
        password:req.body.password
    })
   user.save((err,usr)=>{
    err&&res.status(500).send(err.message)
    res.status(200).json(usr)
   })
}

