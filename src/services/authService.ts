import bcrypt from "bcryptjs";
import User from "../models/userModel";
import { IUser } from "../interfaces/userInterface";
import jwt, { SignOptions } from "jsonwebtoken";
import { ENV_CONFIG } from "../config/environment";

// Register Service
export const registerUserService = async (userData: IUser) => {
    const { name, email, password, role } = userData;

    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("User already exists with this email");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        name,
        email,
        password: hashedPassword,
        role
    });

    return await user.save();
};



export const loginUserService = async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid email or password");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid email or password");

    const token = jwt.sign(
        { userId: user._id, email: user.email },
        ENV_CONFIG.jwtSecret,
        { expiresIn: ENV_CONFIG.jwtExpireIn } as SignOptions
    );

    return {
        id: user._id,
        name: user.name,
        email: user.email,
        token,
    };
};
