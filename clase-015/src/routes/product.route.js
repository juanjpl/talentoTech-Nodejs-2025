//router
import { Router } from "express";
import productController from '../controllers/product.controller.js'
import { authentication } from "../middlewares/auth.middleware.js";

const router = Router()


router.get('/', productController.getProducts);
router.get('/:id',authentication, productController.getProducts);
/*
router.post('/create',authentication, productController.createProducts);
router.delete('/:id',authentication, productController.createProducts);

*/




export default router
