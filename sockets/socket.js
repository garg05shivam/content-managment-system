import { sendChatService } from "../services/chat.service.js";

export const registerSocketHandlers = (io) => {

  // Memory store for online users
  const onlineUsers = new Map();

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

   
    //  * User Online Event
  
    socket.on("user-online", (userId) => {
      onlineUsers.set(userId, socket.id);
      console.log("Online users:", onlineUsers);
    });

    
    //  * Send Message Event
     
    socket.on("send-message", async (data) => {
      try {
        const { senderId, receiverId, message } = data;

        if (!senderId || !receiverId || !message) {
          return;
        }

        // Save in DB
        const savedChat = await sendChatService({
          senderId,
          receiverId,
          message
        });

        // Send to receiver if online
        const receiverSocketId = onlineUsers.get(receiverId);

        if (receiverSocketId) {
          io.to(receiverSocketId).emit("receive-message", savedChat);
        }

        // Also send back to sender
        socket.emit("message-sent", savedChat);

      } catch (error) {
        console.error("Socket error:", error.message);
      }
    });

    
    //  * Handle Disconnect
     
    socket.on("disconnect", () => {
        
        for (let [userId, socketId] of onlineUsers.entries()) {
            if (socketId === socket.id) {
                onlineUsers.delete(userId);
                break;
            }
        }
        console.log("User disconnected:", socket.id);
    });

  });

};
