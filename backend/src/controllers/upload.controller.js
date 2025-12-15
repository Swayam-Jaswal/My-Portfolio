import { uploadToS3 } from "../utils/uploadToS3.js";
import Profile from "../models/Profile.js";

export const uploadResume = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const resumeUrl = await uploadToS3(req.file, "resume");

  const profile = await Profile.findOne();
  if (profile) {
    profile.resumeUrl = resumeUrl;
    await profile.save();
  }

  res.json({ resumeUrl });
};
