import express from "express";
import {createEducationController, getAllEducationController} from "../controllers/educationController";
import { verifyToken } from "../middleware/verifyToken";

const educationRouter = express.Router();

educationRouter.post("/",verifyToken, createEducationController);
educationRouter.get("/", getAllEducationController);

export default educationRouter;
