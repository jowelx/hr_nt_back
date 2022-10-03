import {findAllBill,findById,addBill} from '../src/db/controllers/Bill.js'
import { getTaxes,updateTaxes } from '../src/db/controllers/Taxes.js';
import express from 'express'
//Se definen las rutas y el procedimientos 
const router = express.Router();
router.get('/getTaxes',getTaxes )
router.get("/allBill",findAllBill);
router.get("/:id",findById);
router.post("/addBill",addBill);
router.post('/updateTaxes',updateTaxes)
export default router