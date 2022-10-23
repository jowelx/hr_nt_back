import {findAllBill,findById,addBill} from '../src/db/controllers/Bill.js'
import { getTaxes,updateTaxes } from '../src/db/controllers/Taxes.js';
import { addSettings,allSettings,editSettings,deleteSettings } from '../src/db/controllers/Settings.js';
import { addInventory,getInventory} from '../src/db/controllers/Inventory.js';
import express from 'express'
import { addWork } from '../src/db/controllers/Work.js';
//Se definen las rutas y el procedimientos 
const router = express.Router();
router.get('/getTaxes',getTaxes);
router.get("/allBill",findAllBill);
router.get("/:id",findById);        
router.post("/addBill",addBill);
router.post('/updateTaxes',updateTaxes);
router.post('/addCategory',addSettings);
router.post('/getSettings',allSettings);
router.post('/editSettings',editSettings);
router.post('/deleteSettings',deleteSettings);
router.post('/addInventory',addInventory);
router.post('/getInventory',getInventory)
router.post('/addWork',addWork)
export default router
