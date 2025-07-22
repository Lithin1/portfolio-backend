import mongoose from "mongoose"
import { ENV_CONFIG } from "./environment";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(ENV_CONFIG.mongoUrl,
            {
                dbName: ENV_CONFIG.dbName,
                family: 4
            }
        );
        console.log(`MongoDB connected: ${conn.connection.host}`)
        // seed();

    } catch (error) {
        console.error("Error connecting database", error)
    }
}

export default connectDB