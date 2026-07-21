import User from "../models/user.model.js";
import { hashPassword } from "../utils/helper.js";

export const findUserByEmail = async (email) => {
    return await User.findOne({ email });
}

export const findUserById = async (id) => {
    return await User.findById(id);
}

export const createUser = async (name, email, password) => {
    console.log("Creating user with name:", name, "email:", email);
    const hashedPassword = await hashPassword(password);
    const user = new User({name, email, password: hashedPassword});
    await user.save();

    return user;
}