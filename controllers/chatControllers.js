const { prismaClient } = require("../config/db");

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await prismaClient.chatMessage.findMany({ 
      orderBy: { createdAt: 'asc' },
    });
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error retrieving messages:', error); 
    res.status(500).json({ message: 'Error retrieving all messages', error: error.message });
  }
};


exports.createMessage = async (req, res) => {
  const { senderId, sellerId, chatId, text, image } = req.body;
  try {
    const newMessage = await prismaClient.chatMessage.create({
      data: {
        senderId,
        sellerId,
        chatId,
        text,
        image,
      },
    });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: 'Error creating message', error });
  }
};

exports.updateMessage = async (req, res) => {
  const { id } = req.params;
  const { senderId, sellerId, chatId, text, image } = req.body;
  try {
    const updatedMessage = await prismaClient.chatMessage.update({
      where: { id },
      data: {
        senderId,
        sellerId,
        chatId,
        text,
        image,
      },
    });
    res.status(200).json(updatedMessage);
  } catch (error) {
    res.status(500).json({ message: 'Error updating message', error });
  }
};

exports.deleteMessage = async (req, res) => {
  const { id } = req.params;
  try {
    await prismaClient.chatMessage.delete({
      where: { id },
    });
    res.status(204).json({ message: "Deleted message "})
  } catch (error) {
    res.status(500).json({ message: 'Error deleting message', error });
  }
};