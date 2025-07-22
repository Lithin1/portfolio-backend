import mongoose, { Schema } from "mongoose";
import { IExperience } from "../interfaces/experienceInterface";

const ExperienceSchema: Schema = new Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  designation: { type: String, required: true },
  location: { type: String, required: true },
  description: String,
  startDate: { type:String, required: true },
  endDate: { type: String, default: "Present" },
  techUsed: [String],
  logo: String,
},{timestamps:true});

export const Experience = mongoose.model<IExperience>('Experience', ExperienceSchema);