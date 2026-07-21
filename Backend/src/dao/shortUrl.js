import UrlSchema from "../models/shortURL.model.js";
import { ConflictError } from "../utils/errorHandler.js";

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
  try {
    const newUrl = new UrlSchema({
      full_url: longUrl,
      short_url: shortUrl,
    });
    if (userId) {
      newUrl.user = userId;
    }
    await newUrl.save();
  } catch (error) {
    console.log("dupl: " + error);
    throw new ConflictError(error);
  }
};

// returns whole Url object from that shorturl
export const getUrlFromShortUrl = async (shortUrl) => {
  return await UrlSchema.findOneAndUpdate(
    { short_url: shortUrl },
    { $inc: { clicks: 1 } }
  );
};

// checks if the custom url is already taken  
export const isCustomUrlTaken = async (slug) => {
  return await UrlSchema.exists({ short_url: slug });
};

// returns data about the custom short URL
export const getCustomUrlData = async (slug) => {
  return await UrlSchema.findOne({ short_url: slug });
};