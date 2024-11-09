const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// const chatRoutes = require('./routes/chatRoutes');
const initializeSocket = require('./services/socketServices');
const {authRoutes} = require('./routes/auth')
const {chatRoutes} = require('./routes/chatRoutes');
const { verifyToken } = require('./middlewares/verifyToken');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Initialize Socket.IO

// Use chat routes
app.use('/api/auth', authRoutes);
app.use('/api/chat',verifyToken, chatRoutes);

const PORT = process.env.PORT || 3001;
app.get('/', (req, res) => {
    res.send('API is running');
  });
  
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

initializeSocket(server);
