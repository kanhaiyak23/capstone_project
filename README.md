# Backend Project

<div>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express">
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma">
  <img src="https://img.shields.io/badge/WebSocket-333333?style=for-the-badge&logo=socket.io&logoColor=white" alt="WebSocket">
</div>

## About the Project

This is a backend project built with Node.js, Express, and Prisma, offering a robust API that supports user registration, authentication, and various CRUD operations. The project also integrates WebSocket for real-time messaging . JWT authentication ensures secure access to resources.

## Base URL

The base URL for the API is:

```sh
https://capstone-project-ie5o.onrender.com
```

## Features

- **User Registration and Authentication** using JWT
- **CRUD Operations** for resource management
- **Prisma ORM** integration for database management
- **WebSocket Integration** for real-time messaging
- **Error Handling and Validation**
- Easy-to-use **RESTful API**

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework for Node.js
- [Prisma](https://www.prisma.io/) - ORM for database management
- [JWT](https://jwt.io/) - JSON Web Token for secure authentication
- [WebSocket](https://socket.io/) - Real-time communication
## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Make sure you have Node.js and npm installed.

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

## Installation

To get a local copy of the project and run it on your machine, follow these steps:

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```sh
git clone https://github.com/kanhaiyak23/capstone_project.git
```
## Environment Variables

```plaintext
PORT=8000
DATABASE_URL=your__connection_string
JWT_SECRET=your_jwt_secret_key
```


## API Endpoints

### Authentication Routes

1. **POST /api/auth/signup**
   - Registers a new user.
   - **Request Body:**
     ```json
     {
       "name": "string",
       "email": "string",
       "password": "string"
     }
     ```
   - **Response:**
     ```json
     {
       "message": "User created successfully",
       "user": {
         "id": "string",
         "name": "string",
         "email": "string"
       }
     }
     ```

2. **POST /api/auth/login**
   - Logs in a user and returns a JWT token.
   - **Request Body:**
     ```json
     {
       "email": "string",
       "password": "string"
     }
     ```
   - **Response:**
     ```json
     {
       "message": "Login successful",
       "token": "jwt_token",
       "user": {
         "id": "string",
         "name": "string",
         "email": "string"
       }
     }
     ```

3. **GET /api/auth/getUser**
   - Retrieves the logged-in user information. Requires JWT token.
   - **Headers:**
     ```json
     {
       "Authorization": "Bearer jwt_token"
     }
     ```
   - **Response:**
     ```json
     {
       "user": {
         "id": "string",
         "name": "string",
         "email": "string"
       }
     }
     ```

### Chat Routes

1. **GET /api/chat/messages**
   - Retrieves all messages in the chat.
   - **Response:**
     ```json
     [
       {
         "id": "string",
         "senderId": "string",
         "sellerId": "string",
         "chatId": "string",
         "text": "string",
         "image": "string",
         "createdAt": "timestamp"
       }
     ]
     ```

2. **POST /api/chat/messages**
   - Sends a new message.
   - **Request Body:**
     ```json
     {
       "senderId": "string",
       "sellerId": "string",
       "chatId": "string",
       "text": "string",
       "image": "string"
     }
     ```
   - **Response:**
     ```json
     {
       "id": "string",
       "senderId": "string",
       "sellerId": "string",
       "chatId": "string",
       "text": "string",
       "image": "string",
       "createdAt": "timestamp"
     }
     ```

3. **PUT /api/chat/messages/:id**
   - Updates an existing message.
   - **Request Body:**
     ```json
     {
       "senderId": "string",
       "sellerId": "string",
       "chatId": "string",
       "text": "string",
       "image": "string"
     }
     ```
   - **Response:**
     ```json
     {
       "id": "string",
       "senderId": "string",
       "sellerId": "string",
       "chatId": "string",
       "text": "string",
       "image": "string",
       "updatedAt": "timestamp"
     }
     ```

4. **DELETE /api/chat/messages/:id**
   - Deletes a message.
   - **Response:**
     ```json
     {
       "message": "Deleted message"
     }
     ```

## Socket.IO Integration
- Socket.IO is used for real-time messaging. The server emits and listens for message events, providing instant message delivery between users (buyers and sellers).
- The connection to Socket.IO is initialized using:
  ```js
  initializeSocket(server);

  ## Authorization

##Authorization
-All endpoints in this API require a **valid JWT token** for access. The JWT token serves as a **Bearer Token** and must be included in the `Authorization` header when making requests to **protected routes**.

### How to Acquire the JWT Token

You can acquire a JWT token by logging in through the `/api/auth/login` endpoint.

#### Example of Login Request

**POST /api/auth/login**

- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "your_password"
  }

