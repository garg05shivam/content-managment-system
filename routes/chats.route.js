import express from "express";
import {
  sendChat,
  getChatsByThread
} from "../controllers/chats.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();


//  * Send Message
//  * POST /chats/send
 
router.post("/", authMiddleware, sendChat);


//  * Get Messages By Thread
//  * GET /chats/:threadId

router.get("/:threadId", authMiddleware, getChatsByThread);

export default router;
