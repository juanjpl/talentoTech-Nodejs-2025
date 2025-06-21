import {Router} from "express";
import userController from "../controllers/users.controller.js";


const router= Router();

//Get
router.get("/",userController.getAllUsers);

router.get("/:",userController.getUserById);

//Post
router.post("/",userController.createUser);

router.put("/:id",userController.updateUser);

export default router;