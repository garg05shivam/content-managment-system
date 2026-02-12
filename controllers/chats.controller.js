import {
  sendChatService,
  getChatsByThreadService
} from "../services/chat.service.js";

//  * Send Chat Message
//  * POST /chats/send
 
export const sendChat = async (req, res) => {
  try {
    const senderId = req.user.id; // from auth middleware
    const { receiverId, message } = req.body;

    if (!receiverId || !message) {
      return res.status(400).json({
        success: false,
        message: "Receiver ID and message are required"
      });
    }

    const chat = await sendChatService({
      senderId,
      receiverId,
      message
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      chat
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};



//  * Get Chats By Thread
//  * GET /chats/:threadId
 
export const getChatsByThread = async (req, res) => {
  try {
    const { threadId } = req.params;

    const chats = await getChatsByThreadService(threadId);

    res.status(200).json({
      success: true,
      chats
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
