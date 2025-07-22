import { Response } from "express";
import { IResponse } from "../interfaces/responseInterface";

export const sendResponse = <T>(res: Response, httpCode: number, statusCode: string, message: string, error?: unknown | null, data?: T): Response<IResponse<T>> => {
    return res.status(httpCode).json({ data, statusCode, message, error });
}