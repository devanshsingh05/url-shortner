import { createUser, findUserByEmail } from "../dao/user.dao.js";
import { comparePassword, signToken } from "../utils/helper.js";
import wrapAsync from "../utils/tryCatchWrapper.js";
import { cookieOptions } from "../config/config.js";
import User from "../models/user.model.js";

export const registerUser = wrapAsync(async (req, res) => {
  console.log("Registering user with data:", req.body);
  const { name, email, password } = req.body;

  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    console.log("User already exists:", existingUser);
    return res.status(400).json({ message: "User already exists" });
  }
  
  const newUser = await createUser(name, email, password);
  console.log("New user created:", newUser);

  const token = signToken({ id: newUser._id });

  res.cookie("token", token, cookieOptions);

  req.user = newUser; // Set the user in the request object for further use


  res.status(201).json({
    message: "User registered successfully",
    user: newUser,
    token,
  });
});

export const loginUser = wrapAsync(async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  const isMatch = await comparePassword(password, user.password);

  if (!isMatch) {
    return res.status(400).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  const token = signToken({ id: user._id });

  res.cookie("token", token, cookieOptions);

  user.password = undefined;

  res.status(200).json({
    success: true,
    message: "Login successful",
    user,
    token,
  });
});
