import express from 'express';
import { createShortUrl } from '../controllers/shortUrl.controller.js';
import { isAuth } from '../middleware/auth.middleware.js';
const router = express.Router();


router.post("/", createShortUrl);


export default router;