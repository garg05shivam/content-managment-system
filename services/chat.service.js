import Chat from "../models/chat.js";
import Thread from "../models/thread.js";

// Get chats by thread
 
export const getChatsByThreadService = async (threadId) => {
  return await Chat.find({ thread: threadId })
    .populate("sender", "name email")
    .sort({ createdAt: 1 });
};


// Send chat message

export const sendChatService = async ({
  senderId,
  receiverId,
  message
}) => {
  if (!message) {
    throw new Error("Message is required");
  }

  const thread = await findOrCreateThreadService(senderId, receiverId);

  // Create chat
  const newChat = await Chat.create({
    thread: thread._id,
    sender: senderId,
    message
  });

  // Update thread lastMessage
  thread.lastMessage = message;
  thread.lastMessageAt=new Date();
  await thread.save();

  return newChat;
};



//   Find or create thread
 
export const findOrCreateThreadService = async (userId1, userId2) => {

  // Sort IDs to prevent duplicate threads
  const participants = [userId1.toString(), userId2.toString()].sort();

  let thread = await Thread.findOne({
    participants: { $all: participants },
    $expr: { $eq: [{ $size: "$participants" }, 2] }
  });

  if (!thread) {
    thread = await Thread.create({
      participants
    });
  }

  return thread;
};
