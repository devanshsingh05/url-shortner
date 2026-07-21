import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import bcrypt from "bcrypt";
import { findUserById } from "../dao/user.dao.js";

export const generateNanoid = (length) => {
  return nanoid(length);
};

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const comparePassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};

export const signToken = (payload, expiresIn = "1h") => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Decoded token:", decoded);
    return decoded.id;
  } catch (error) {
    throw new Error("Invalid token");
  }
};

export const attachUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return next();
  }
  try {
    const decoded = verifyToken(token); // returns the decoded payload ,, id of the user
    const user = await findUserById(decoded);
    if (!user) {
      return next();
    }
    req.user = user;
    next();
  } catch (error) {
    next();
  }
};
