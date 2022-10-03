import mongoose from 'mongoose'
//se defines la estructura de los datos del usuario
const Schema = mongoose.Schema

const TaxesSchema = new Schema({
    debitoFiscal:{type:String},
    creditoFiscal:{type:String},
 
})

export const Taxes = mongoose.model('Taxes',TaxesSchema)