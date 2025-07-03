import express from 'express';
const router = express.Router();

import userController from '../controllers/user.controllers.js'

router.post("/signup", userController.signup);

export default router;