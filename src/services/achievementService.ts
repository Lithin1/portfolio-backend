import { IAchievement } from "../interfaces/achievementInterface";
import { Achievement } from "../models/achievementModel";


export const createAchievementService = async (AchievementData: IAchievement): Promise<IAchievement> => {
    const achievement = new Achievement(AchievementData);
    return await achievement.save();
};

export const getAchievementService = async (): Promise<IAchievement[]> => {
    return await Achievement.find().sort({ createdAt: 1 });
};
