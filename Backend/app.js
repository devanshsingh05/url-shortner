import express from "express";

import dotenv from "dotenv";
dotenv.config("./.env");

import connectDB from "./src/config/mongoose.config.js";
import cookieParser from "cookie-parser";

import shortUrlRoute from "./src/routes/shortUrl.route.js";
import { redirectToLongUrl } from "./src/controllers/shortUrl.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";

import authRoutes from "./src/routes/auth.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import cors from "cors";
import { attachUser } from "./src/utils/helper.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend URL
    credentials: true, // Allow credentials
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(attachUser);



app.use("/api/auth",authRoutes );
await connectDB();

app.use("/api/user", userRoutes);

app.use("/api/create", shortUrlRoute);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Welcome to URL Shortener API");
});

app.get("/:shortUrl", redirectToLongUrl);

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
