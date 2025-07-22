import express from "express";
import { createAchievementController, getAllAchievementController } from "../controllers/achievementController";
import { verifyToken } from "../middleware/verifyToken";


const achievementRouter = express.Router();

achievementRouter.post("/",verifyToken, createAchievementController);
achievementRouter.get("/", getAllAchievementController);

export default achievementRouter;
