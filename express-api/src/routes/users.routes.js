import {Router} from "express";
import userController from "../controllers/users.controller.js";


const router= Router();

//Get
router.get("/",userController.getAllUsers);
router.get("/id",userController.getUserById);

router.get("/:",userController.getUserById);

//Post
router.post("/",userController.createUser);

//Put
router.put("/:id",userController.updateUser);

//Post
router.post("/",userController.createUser);


export default router;