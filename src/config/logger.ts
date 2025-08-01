import winston from "winston";
import { ENV_CONFIG } from "./environment";

export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level}]: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

if (ENV_CONFIG.nodeEnv !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}