import mongoose from 'mongoose'
//se defines la estructura de los datos del usuario
const Schema = mongoose.Schema

const InventorySchema = new Schema({
    id:{type:String},
    date:{type:String},
    name:{type:String},
    amount:{type:String},
    category:{type:String}
})

export const Inventory = mongoose.model('Inventory',InventorySchema)