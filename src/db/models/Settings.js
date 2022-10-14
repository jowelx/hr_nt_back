import mongoose from 'mongoose'
//se defines la estructura de los datos del usuario
const Schema = mongoose.Schema

const SettingsSchema = new Schema({
    category:{type:String},
})

export const Settings = mongoose.model('Settings',SettingsSchema)