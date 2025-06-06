# 🌐 Connectra - Professional Networking App Backend

Welcome to the backend of **Connectra**, a professional networking platform inspired by LinkedIn. This RESTful API server handles user authentication, profile management, connections, and more using modern technologies.

---

## 🚀 Tech Stack

* **Node.js** + **Express**
* **MongoDB** + **Mongoose**
* **JWT Authentication**
* **bcrypt** (Password hashing)
* **cookie-parser** (Session management)
* **dotenv** (Environment configuration)

---

## 📁 Project Structure

```
connectra-backend/
├── src/
│   ├── controllers/        # API route handlers
│   ├── services/           # Business logic services
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API route definitions
│   ├── middleware/         # Custom middleware (auth, validation)
│   ├── utils/              # Helper utilities
│   ├── db/                 # Database connection config
│   └── app.js              # App setup
├── .env                    # Environment variables
├── server.js               # Server entry point
└── README.md               # Project documentation
```

---

## 🧪 API Overview

### 🔐 Authentication

| Method | Endpoint         | Description            |
| ------ | ---------------- | ---------------------- |
| POST   | /api/auth/signUp | Register a new user    |
| POST   | /api/auth/signIn | Login with credentials |
| POST   | /api/auth/logout | Logout (clears token)  |

### 👤 Profile Management

| Method | Endpoint        | Description                |
| ------ | --------------- | -------------------------- |
| GET    | /api/profile/me | Get logged-in user profile |
| PUT    | /api/profile    | Update profile info        |

### 🤝 Connections

| Method | Endpoint                           | Description                  |
| ------ | ---------------------------------- | ---------------------------- |
| POST   | /api/connections/send/\:receiverId | Send connection request      |
| POST   | /api/connections/accept/\:senderId | Accept a received request    |
| POST   | /api/connections/reject/\:senderId | Reject a received request    |
| GET    | /api/connections/all               | Get all accepted connections |
| GET    | /api/connections/suggestions       | Get people you may know      |

---

## 🛠️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/connectra-backend.git
cd connectra-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### 4. Start the Server

```bash
npm run dev
```

---

## ✨ Features

* JWT-based authentication via secure cookies
* Profile creation with first name, last name, skills, education, and experience
* Connection management (send, accept, reject, view)
* Intelligent suggestions based on non-connected users
* Clear and modular architecture for scalability

---

## 📚 Future Enhancements

* 🔍 Search users by skill or name
* 📊 Analytics on profile views and connection growth
* 📨 Messaging between connected users
* 🧠 AI-based connection suggestions

---

## 📃 License

Licensed under the MIT License.

---

## 👋 About

This backend is built with love by **\[Your Name]**. Feel free to reach out or contribute to make it even better!

[GitHub](https://github.com/your-username) | [LinkedIn](https://linkedin.com/in/your-link)
