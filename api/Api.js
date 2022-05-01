import {findAllUsers,findById,addUser} from '../src/db/controllers/users.js'
import express from 'express'

const router = express.Router();

router.get("/all",findAllUsers);
router.get("/:id",findById);
router.post("/add",addUser);

export default router