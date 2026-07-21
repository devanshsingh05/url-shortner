import { findUserById } from "../dao/user.dao.js";
import { verifyToken } from "../utils/helper.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const isAuth = wrapAsync( async(req, res, next) => {
    
    const token = req.cookies.token;
    if(!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = verifyToken(token); // returns the decoded payload ,, id of the user
  
    
    const user = await findUserById(decoded);
    if(!user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = user;
    next();
})