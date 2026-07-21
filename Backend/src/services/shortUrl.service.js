import { isCustomUrlTaken, saveShortUrl } from "../dao/shortUrl.js";
import UrlSchema from "../models/shortURL.model.js";
import { generateNanoid } from "../utils/helper.js";

export const createShortUrlWithoutUser = async (url) => {
  const shortUrl = generateNanoid(7);
  if(!shortUrl) throw new Error("Failed to generate short URL");
  await saveShortUrl(shortUrl, url);
  console.log("shortUrl1: " + shortUrl);
  return shortUrl;
};

export const createShortUrlWithUser = async (url, userId, slug=null) => {
  if(slug) {  // if slug is provided, check if already used or not 
    const exists = await isCustomUrlTaken(slug);
    // if it is used or already exist, throw an error
    if(exists){
      throw new Error("Custom URL is already taken");
    }
  }
  const shortUrl = slug || generateNanoid(7);
  
  await saveShortUrl(shortUrl, url, userId);
  return shortUrl;
};
