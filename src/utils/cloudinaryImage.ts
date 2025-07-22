import cloudinary from "../config/cloudinary";

export const uploadLocalImage = async (filePath: string): Promise<string> => {
    const result = await cloudinary.uploader.upload(filePath, { folder: "projects" });
    return result.secure_url;
};
