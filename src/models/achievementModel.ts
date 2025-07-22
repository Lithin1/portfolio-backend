import mongoose, { Schema } from "mongoose";
import { IAchievement } from "../interfaces/achievementInterface";

const AchievementSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    link: { type: String, required: true }
}, { timestamps: true });

export const Achievement = mongoose.model<IAchievement>("Achievement", AchievementSchema);
