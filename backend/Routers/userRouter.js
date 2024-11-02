import express from 'express';
import { loginControllers, registerControllers, setAvatarController } from '../controllers/userController.js';

const router = express.Router();

router.route("/register").get((req, res) => {
    res.json({ message: "Welcome to the registration page" });
}).post(registerControllers); 

router.route("/login").post(loginControllers);

router.route("/setAvatar/:id").post(setAvatarController);

export default router;