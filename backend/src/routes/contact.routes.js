import express from "express";
import {
  createContact,
  getContacts
} from "../controllers/contact.controller.js";
import adminMiddleware from "../middlewares/admin.middleware.js";
import { contactRateLimiter } from "../middlewares/rateLimit.middleware.js";

const router = express.Router();

// Public
router.post("/", contactRateLimiter, createContact);

// Admin
router.get("/", adminMiddleware, getContacts);

export default router;
