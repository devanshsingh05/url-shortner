import { getUrlFromShortUrl } from "../dao/shortUrl.js";
import {
  createShortUrlWithoutUser,
  createShortUrlWithUser,
} from "../services/shortUrl.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync(async (req, res) => {
  const { url, slug } = req.body;
  
  let shortUrl;
  if (req.user) {
    console.log("with user");
    shortUrl = await createShortUrlWithUser(url, req.user._id, slug);
  } else {
    console.log("without user")
    shortUrl = await createShortUrlWithoutUser(url);
  }
  console.log("shortUrl: " + shortUrl);
  res.status(201).json({ shortUrl: process.env.APP_URL + shortUrl });
});

export const redirectToLongUrl = wrapAsync(async (req, res) => {
  const { shortUrl } = req.params;
  const url = await getUrlFromShortUrl(shortUrl);
  if (url) {
    await url.save();
    res.redirect(url.full_url);
  } else {
    res.status(404).send("URL not found");
  }
});
