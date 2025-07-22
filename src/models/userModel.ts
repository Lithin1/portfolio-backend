import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "../interfaces/userInterface";

export interface IUserDocument extends IUser, Document {}

const userSchema = new Schema<IUserDocument>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
});

const User = mongoose.model<IUserDocument>("User", userSchema);
export default User;