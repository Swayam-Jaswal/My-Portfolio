import express from "express";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject
} from "../controllers/project.controller.js";
import adminMiddleware from "../middlewares/admin.middleware.js";
import upload from "../middlewares/upload.middleware.js";
import { uploadProjectImage } from "../controllers/project.controller.js";

const router = express.Router();

router.get("/", getProjects);
router.post("/", adminMiddleware, createProject);
router.put("/:id", adminMiddleware, updateProject);
router.delete("/:id", adminMiddleware, deleteProject);
router.post(
  "/:id/image",
  adminMiddleware,
  upload.single("file"),
  uploadProjectImage
);

export default router;
