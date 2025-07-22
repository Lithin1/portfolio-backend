import { Router } from "express";
import { createExperienceController, getAllExperiencesController } from "../controllers/experienceController";
import { verifyToken } from "../middleware/verifyToken";


const experienceRouter = Router();

experienceRouter.post('/', verifyToken, createExperienceController)
experienceRouter.get('/', getAllExperiencesController)

export default experienceRouter