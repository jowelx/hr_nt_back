import {findAllUsers,findById,addUser} from '../src/db/controllers/users.js'
import express from 'express'
//Se definen las rutas y el procedimientos 
const router = express.Router();

router.get("/all",findAllUsers);
router.get("/:id",findById);
router.post("/add",addUser);

export default router