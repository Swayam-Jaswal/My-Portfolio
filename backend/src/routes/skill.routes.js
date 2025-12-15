import express from "express";
import {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill
} from "../controllers/skill.controller.js";
import adminMiddleware from "../middlewares/admin.middleware.js";

const router = express.Router();

// Public
router.get("/", getSkills);

// Admin
router.post("/", adminMiddleware, createSkill);
router.put("/:id", adminMiddleware, updateSkill);
router.delete("/:id", adminMiddleware, deleteSkill);

export default router;
