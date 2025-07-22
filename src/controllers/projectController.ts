import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createProjectService, getProjectService } from "../services/projectService";
import { APP_CODES } from "../constants/constants";
import { logger } from "../config/logger";
import { sendResponse } from "../utils/sendResponse";
import { uploadLocalImage } from "../utils/cloudinaryImage";


export const createProjectController = async (req: Request, res: Response) => {
    try {
        const projectsData = req.body; // array of projects

        const savedProjects = [];

        for (const projectData of projectsData) {
            const { images: localImages, ...otherProjectFields } = projectData;

            const imageUrls: string[] = [];
            for (const localPath of localImages) {
                const url = await uploadLocalImage(localPath);
                imageUrls.push(url);
            }

            const finalPayload = {
                ...otherProjectFields,
                imagUrl: imageUrls
            };

            const savedProject = await createProjectService(finalPayload);
            savedProjects.push(savedProject);
        }

        return sendResponse(res, StatusCodes.CREATED, APP_CODES.CREATE_SUCCESS.code, "Projects created", null, savedProjects);
    } catch (error) {
        logger.error(`Error creating multiple projects: ${error}`);
        return sendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, APP_CODES.UNKNOWN_ERROR.code, APP_CODES.UNKNOWN_ERROR.message, error);
    }
};



export const getAllProjectsController = async (_req: Request, res: Response) => {
    try {
        const projects = await getProjectService();
        logger.info(`Fetched ${projects.length} projects`);

        return sendResponse(
            res,
            StatusCodes.OK,
            APP_CODES.FETCH_SUCCESS.code,
            APP_CODES.FETCH_SUCCESS.message,
            null,
            projects
        );
    } catch (error) {
        logger.error(`Error fetching projects: ${error}`);
        return sendResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            APP_CODES.UNKNOWN_ERROR.code,
            APP_CODES.UNKNOWN_ERROR.message,
            error
        );
    }
};
