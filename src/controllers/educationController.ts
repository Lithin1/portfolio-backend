import { Request, Response } from "express";
import {createEducationService, getAllEducationService} from "../services/educationService";
import { StatusCodes } from "http-status-codes";
import { logger } from "../config/logger";
import { APP_CODES } from "../constants/constants";
import { sendResponse } from "../utils/sendResponse";

// POST: Create Education
export const createEducationController = async (req: Request, res: Response) => {
  try {
    const education = await createEducationService(req.body);
     return sendResponse(
            res,
            StatusCodes.CREATED,
            APP_CODES.CREATE_SUCCESS.code,
            "Achievements created",
            null,
            education
        );
  }catch (error) {
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

// GET: Fetch All Education Records
export const getAllEducationController = async (_req: Request, res: Response) => {
  try {
    const educations = await getAllEducationService();
    logger.info(`Fetched ${educations.length} projects`);

        return sendResponse(
            res,
            StatusCodes.OK,
            APP_CODES.FETCH_SUCCESS.code,
            APP_CODES.FETCH_SUCCESS.message,
            null,
            educations
        );
  }catch (error) {
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
