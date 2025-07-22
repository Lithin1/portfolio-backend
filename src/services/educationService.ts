import { Education } from "../models/educationModel";
import { IEducation } from "../interfaces/educationInterface";

// Create new Education
export const createEducationService = async (educationData: IEducation) => {
  const education = new Education(educationData);
  return await education.save();
};

// Get all Education records
export const getAllEducationService = async () => {
  return await Education.find().sort({ createdAt: -1 });
};
