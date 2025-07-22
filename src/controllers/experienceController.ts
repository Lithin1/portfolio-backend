import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createExperienceService, getExperienceService } from "../services/experienceService";
import { APP_CODES } from "../constants/constants";
import { logger } from "../config/logger";
import { sendResponse } from "../utils/sendResponse";

export const createExperienceController = async (req: Request, res: Response) => {
    try {
        const experience = await createExperienceService(req.body);
        logger.info(`Experience created`);

        return sendResponse(
            res,
            StatusCodes.CREATED,
            APP_CODES.CREATE_SUCCESS.code,
            APP_CODES.CREATE_SUCCESS.message,
            null,
            experience
        );
    } catch (error) {
        logger.error(`Error creating experience: ${error}`);
        return sendResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            APP_CODES.UNKNOWN_ERROR.code,
            APP_CODES.UNKNOWN_ERROR.message,
            error
        );
    }
};

export const getAllExperiencesController = async (_req: Request, res: Response) => {
    try {
        const experiences = await getExperienceService();
        logger.info(`Fetched ${experiences.length} experiences`);

        return sendResponse(
            res,
            StatusCodes.OK,
            APP_CODES.FETCH_SUCCESS.code,
            APP_CODES.FETCH_SUCCESS.message,
            null,
            experiences
        );
    } catch (error) {
        logger.error(`Error fetching experiences: ${error}`);
        return sendResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            APP_CODES.UNKNOWN_ERROR.code,
            APP_CODES.UNKNOWN_ERROR.message,
            error
        );
    }
};
