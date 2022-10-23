import mongoose from 'mongoose'
//se defines la estructura de los datos del usuario
const Schema = mongoose.Schema

const WorkSchema = new Schema({
    lista:{type:Array},
    costo:{type:String},
    nameWork:{type:String},
    serial:{type:String},
})

export const Work = mongoose.model('Work',WorkSchema )