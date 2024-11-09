
const { Server } = require("socket.io");
const prisma = require("../config/db");
const newMessage = {};
const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    },
  });

  

  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    socket.on("join room", async (roomId) => {
    
      socket.join(roomId);
      console.log(`User with socket ID ${socket.id} joined room: ${roomId}`);
      socket.emit("room joined", roomId);
      if (newMessage[roomId]) {
        socket.emit('previous messages', newMessage[roomId]);
      }

      
      
      if (newMessage[roomId]) {
        socket.emit('previous messages', newMessage[roomId]);
      }
    });

    socket.on("chat message", async ({ message, roomId }) => {
      console.log("Received message:", message, "for room:", roomId);
      if (!newMessage[roomId]) {
        newMessage[roomId] = [];
      }
      newMessage[roomId].push(message);
      io.to(roomId).emit("chat message", message);
      io.to(roomId).emit("new message notification",message);
      try {
        const storedMessage = await prisma.chatMessage.create({
          data: {
            senderId: message.senderId,
            sellerId: message.sellerid,
            chatId: roomId,
            text: message.text,

            image: message.image,
          },
        });
        

        console.log("Message stored in MySQL database.");

        
        
      } catch (error) {
        console.error("Error storing message in database:", error);
      }
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
    });
  });

  return io;
};

module.exports = initializeSocket;
