export interface IProject {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveDemoLink: string;
  images: string[];
  status: string;
  featured: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}