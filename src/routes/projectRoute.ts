import { Router } from "express";
import { createProjectController, getAllProjectsController } from "../controllers/projectController";
import { verifyToken } from "../middleware/verifyToken";



const projectRouter = Router();

projectRouter.post('/', verifyToken, createProjectController)
projectRouter.get('/', getAllProjectsController)

export default projectRouter