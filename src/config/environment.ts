import * as dotenv from "dotenv";
dotenv.config();

export const ENV_CONFIG = {
    nodeEnv: process.env.NODE_ENV || "development",
    mongoUrl: process.env.MONGO_URI!,
    port: process.env.PORT!,
    dbName: process.env.DB_NAME!,
    jwtSecret: process.env.JWT_SECRET! as string, // required string
    jwtExpireIn: process.env.JWT_EXPIRES_IN as string|| "1d" ,
};
