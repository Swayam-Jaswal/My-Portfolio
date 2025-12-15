import express from "express";
import upload from "../middlewares/upload.middleware.js";
import adminMiddleware from "../middlewares/admin.middleware.js";
import { uploadResume } from "../controllers/upload.controller.js";

const router = express.Router();

router.post(
  "/resume",
  adminMiddleware,
  upload.single("file"),
  uploadResume
);

export default router;
