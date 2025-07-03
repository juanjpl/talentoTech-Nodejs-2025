import {Router} from "express";
import userController from "../controllers/users.controller.js";


const router= Router();

//Get
router.get("/",userController.getAllUsers);
router.get("/id",userController.getUserById);

router.get("/:",userController.getUserById);

//Post
router.post("/",userController.createUser);

<<<<<<< HEAD
//Put
router.put("/:id",userController.updateUser);

//Post
router.post("/",userController.createUser);

=======
router.put("/:id",userController.updateUser);

>>>>>>> f1bde4183a41ab8bf1f6a4c3efe41ae012cd00cb
export default router;