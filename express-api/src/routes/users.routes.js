import {Router} from "express";
import userController from "../controllers/users.controller.js";


const router= Router();

//Get
router.get("/",userController.getAllUsers);


//Post
router.post("/",userController.createUser);

export default router;