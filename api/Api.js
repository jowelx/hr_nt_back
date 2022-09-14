import {findAllBill,findById,addBill} from '../src/db/controllers/Bill.js'
import express from 'express'
//Se definen las rutas y el procedimientos 
const router = express.Router();

router.get("/allBill",findAllBill);
router.get("/:id",findById);
router.post("/addBill",addBill);

export default router