import { IExperience } from "../interfaces/experienceInterface";
import { Experience } from "../models/experienceModel";

export const createExperienceService = async (experienceData: IExperience): Promise<IExperience> => {
    const experience = new Experience(experienceData);
    return await experience.save();
};

export const getExperienceService = async (): Promise<IExperience[]> => {
    return await Experience.find().sort({ createdAt: -1 });
};
