import UrlSchema from "../models/shortURL.model.js";

export const getAllUserUrls = async (req, res) => {
  const { _id } = req.user;
  try {
    const urls = await UrlSchema.find({ user: _id });
    console.log("User URLs from controller: ", urls);
    res.status(200).json(urls);
  } catch (error) {
    res.status(500).json({ message: "Error fetching URLs" });
  }
};
