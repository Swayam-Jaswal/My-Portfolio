import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    techStack: [String],
    previewImage: String,
    liveUrl: String,
    githubUrl: String,
    status: {
      type: String,
      enum: ["LIVE", "IN_DEVELOPMENT"],
      default: "IN_DEVELOPMENT"
    },
    isVisible: {
      type: Boolean,
      default: true
    },
    order: Number
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
