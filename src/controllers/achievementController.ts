import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { APP_CODES } from "../constants/constants";
import { logger } from "../config/logger";
import { sendResponse } from "../utils/sendResponse";
import { uploadLocalImage } from "../utils/cloudinaryImage";
import { createAchievementService, getAchievementService } from "../services/achievementService";


export const createAchievementController = async (req: Request, res: Response) => {
    try {
        const achievementsData = req.body; // array of achievements

        const savedAchievements = [];

        for (const achievementData of achievementsData) {
            const { imageUrl: localImage, ...otherAchievementFields } = achievementData;

            // Upload single image
            const imageUrl = await uploadLocalImage(localImage);

            const finalPayload = {
                ...otherAchievementFields,
                imageUrl, // single string
            };

            const savedAchievement = await createAchievementService(finalPayload);
            savedAchievements.push(savedAchievement);
        }

        return sendResponse(
            res,
            StatusCodes.CREATED,
            APP_CODES.CREATE_SUCCESS.code,
            "Achievements created",
            null,
            savedAchievements
        );
    } catch (error) {
        logger.error(`Error creating achievements: ${error}`);
        return sendResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            APP_CODES.UNKNOWN_ERROR.code,
            APP_CODES.UNKNOWN_ERROR.message,
            error
        );
    }
};




export const getAllAchievementController = async (_req: Request, res: Response) => {
    try {
        const projects = await getAchievementService();
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
