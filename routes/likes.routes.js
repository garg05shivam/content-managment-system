
import express from "express";
import { toggleLike, getLikeCount } from "../controllers/likes.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/:id/likes", authMiddleware, toggleLike);
router.get("/:id/likes", getLikeCount);

export default router;
