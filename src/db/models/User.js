import mongoose from 'mongoose'
//se defines la estructura de los datos del usuario
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{type:String},
    userName:{type:String},
    password:{type:String}
})

export const User = mongoose.model('User',UserSchema)