import express from "express";
import {
  getProfile,
  upsertProfile
} from "../controllers/profile.controller.js";
import adminMiddleware from "../middlewares/admin.middleware.js";

const router = express.Router();

// Public
router.get("/", getProfile);

// Admin
router.post("/", adminMiddleware, upsertProfile);

export default router;
