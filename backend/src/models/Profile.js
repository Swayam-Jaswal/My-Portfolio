import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    name: String,
    tagline: String,
    about: String,
    experience: String,
    resumeUrl: String,
    socialLinks: {
      github: String,
      linkedin: String,
      twitter: String,
      email: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("Profile", profileSchema);
