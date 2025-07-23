import { Router } from "express";
import { createProjectController, getAllProjectsController, updateProjectController } from "../controllers/projectController";
import { verifyToken } from "../middleware/verifyToken";



const projectRouter = Router();

projectRouter.post('/', verifyToken, createProjectController)
projectRouter.get('/', getAllProjectsController)
projectRouter.patch('/', updateProjectController)

export default projectRouter