import mongoose from 'mongoose'
//se defines la estructura de los datos del usuario
const Schema = mongoose.Schema

const BillSchema = new Schema({
    date:{type:String},
    serial:{type:String},
    value:{type:String},
    type:{type:String},
    id:{type:String}
})

export const Bill = mongoose.model('Bill',BillSchema)