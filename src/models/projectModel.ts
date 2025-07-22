import mongoose, { Schema } from "mongoose";
import { IProject } from "../interfaces/projectInterface";


const ProjectSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [String],
  githubLink: String,
  liveDemoLink: String,
  images: [String],
  status: { type: String, default: 'Completed' },
  featured: { type: Boolean, default: false },
},{timestamps:true});

export const Project = mongoose.model<IProject>('Project', ProjectSchema);