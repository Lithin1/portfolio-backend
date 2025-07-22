import { Router } from "express"
import projectRouter from "./projectRoute";
import experienceRouter from "./experienceRoute";
import educationRouter from "./educationRoute";
import achievementRouter from "./achievementRoute";
import authRouter from "./authRoute";

const router = Router();


router.use('/projects', projectRouter);
router.use('/experience', experienceRouter);
router.use('/education', educationRouter);
router.use('/achievements', achievementRouter);
router.use('/auth', authRouter);


export default router;