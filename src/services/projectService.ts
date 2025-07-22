import { IProject } from "../interfaces/projectInterface";
import { Project } from "../models/projectModel";

export const createProjectService = async (projectData: IProject): Promise<IProject> => {
    const project = new Project(projectData);
    return await project.save();
};

export const getProjectService = async (): Promise<IProject[]> => {
    return await Project.find().sort({ createdAt: -1 });
};
