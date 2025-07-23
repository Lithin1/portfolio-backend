import { IProject } from "../interfaces/projectInterface";
import { Project } from "../models/projectModel";

export const createProjectService = async (projectData: IProject): Promise<IProject> => {
    const project = new Project(projectData);
    return await project.save();
};

export const getProjectService = async (): Promise<IProject[]> => {
    return await Project.find().sort({ createdAt: -1 });
};


export const updateProjectService = async (id: string, updatedData: Partial<IProject>): Promise<IProject | null> => {
  const updatedProject = await Project.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });
  return updatedProject;
};
