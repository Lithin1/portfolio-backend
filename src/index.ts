import * as dotenv from "dotenv";
import express, { Application } from "express";
import cors from 'cors';
import helmet from "helmet";
import { ENV_CONFIG } from "./config/environment";
import connectDB from './config/connection';
import { errorHandler } from "./middleware/errorHandler";
import { logger } from "./config/logger";
import router from "./routes";

import http from 'http'
dotenv.config();

const app: Application = express();
const server = http.createServer(app) 


connectDB();
app.use(helmet());
const allowedOrigins = [ENV_CONFIG.frontendUrl];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));


app.use(express.json({ limit: '1mb' }));

app.use((req, res, next) => {
    logger.info(`HTTP ${req.method} ${req.originalUrl}`);
    next();
});

app.use('/api/v1', router);

app.use(errorHandler);

server.listen(parseInt(ENV_CONFIG.port), () => {
    console.log("Server running on :", ENV_CONFIG.port);
});

