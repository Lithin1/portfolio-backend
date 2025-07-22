import { Request, Response } from "express";
import { loginUserService, registerUserService } from "../services/authService";
import { StatusCodes } from "http-status-codes";
import { APP_CODES } from "../constants/constants";
import { sendResponse } from "../utils/sendResponse";
import { logger } from "../config/logger";

export const registerController = async (req: Request, res: Response) => {
  try {
    const user = await registerUserService(req.body);
    return sendResponse(
      res,
      StatusCodes.CREATED,
      APP_CODES.USER_REGISTER_SUCCESS.code,
      APP_CODES.USER_REGISTER_SUCCESS.message,
      null,
      user
    );
  } catch (error) {
    logger.error(`Error creating register: ${error}`);
    return sendResponse(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      APP_CODES.USER_REGISTER_FAILED.code,
      APP_CODES.USER_REGISTER_FAILED.message,
      error
    );
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await loginUserService(email, password);

    return sendResponse(
      res,
      StatusCodes.CREATED,
      APP_CODES.USER_LOGIN_SUCCESS.code,
      APP_CODES.USER_LOGIN_SUCCESS.message,
      null,
      user
    );
  } catch (error) {
    logger.error(`Error creating login: ${error}`);
    return sendResponse(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      APP_CODES.USER_LOGIN_FAILED.code,
      APP_CODES.USER_LOGIN_FAILED.message,
      error
    );
  }
};
