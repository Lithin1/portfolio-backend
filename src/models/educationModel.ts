import mongoose, { Schema } from "mongoose";
import { IEducation } from "../interfaces/educationInterface";

const EducationSchema: Schema = new Schema(
  {
    institute: { type: String, required: true },
    degree: { type: String, required: true },
    specialization: { type: String, required: true },
    board:{ type: String, required: true },
    location: { type: String, required: true },
    duration: { type: String, required: true },
    logo: { type: String },
  },
  { timestamps: true }
);

export const Education = mongoose.model<IEducation>("Education", EducationSchema);
