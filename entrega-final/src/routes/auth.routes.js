
//auth.routes.js
import express from 'express';
import {authorizationController} from '../controllers/auth.controller.js';

const router= express.Router();

router.post('/',authorizationController.login);

export default router;
