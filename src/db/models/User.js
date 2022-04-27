import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{type:String},
    userName:{type:String},
    password:{type:String}
})

export const User = mongoose.model('User',UserSchema)