import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    level: Number,
    order: Number
  },
  { timestamps: true }
);

export default mongoose.model("Skill", skillSchema);
