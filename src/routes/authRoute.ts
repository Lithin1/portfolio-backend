import express from "express";
import {  loginController, registerController } from "../controllers/authController";
import { verifyToken } from "../middleware/verifyToken";


const authRouter = express.Router();

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);

export default authRouter;
