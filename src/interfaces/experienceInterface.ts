export interface IExperience{
  company: string;
  role: string;
  designation: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string | null;
  techUsed: string[];
  logo: string;
  createdAt?: Date;
  updatedAt?: Date;
}
