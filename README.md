
# 📦 Content Managment System (CMS) Backend

A secure and scalable Content Management System (CMS) Backend API built using Node.js, Express, MongoDB, and JWT Authentication.

This backend includes OTP-based signup, cookie-based authentication, role-based authorization, artifact management, comments, and like/unlike functionality.

---

## 🚀 Features

- OTP-based User Signup
- Cookie-based JWT Authentication
- Role-Based Authorization (ADMIN, EDITOR, VIEWER)
- Artifact Creation & Management
- Comment System
- Like / Unlike Feature
- Secure Password Hashing (bcrypt)
- Clean MVC Architecture
- Middleware-based Authentication & Authorization

---

## 🏗 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT)
- bcrypt
- cookie-parser
- dotenv
- morgan
- cors

---

## 📂 Project Structure

content-managment-system/
│
├── config/
│   └── db.js
│
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── utils/
│
├── app.js
├── server.js
└── package.json

---

## ⚙️ Installation & Setup

1. Clone the repository

git clone https://github.com/your-username/content-managment-system.git
cd content-managment-system

2. Install dependencies

npm install

3. Create a .env file in root directory

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key

4. Start the server

node server.js

Server runs at:
http://localhost:5000

---

## 🔐 Authentication Flow

Step 1: Initiate Signup (Generate OTP)

POST /auth/signup/initiate

Step 2: Verify OTP & Create User

POST /auth/signup/verify

Step 3: Login

POST /auth/login

JWT token is stored in an HTTP-only cookie for secure authentication.

---

## 📦 Artifact APIs

POST /artifacts  → Create Artifact (Protected)
GET  /artifacts  → Get All Artifacts (ADMIN Only)

---

## 💬 Comment APIs

POST /comments/:id/comments → Add Comment (Protected)
GET  /comments/:id/comments → Get Comments

---

## ❤️ Like APIs

POST /likes/:id/like  → Like / Unlike (Protected)
GET  /likes/:id/likes → Get Like Count

---

## 🔒 Security Features

- Passwords hashed using bcrypt
- OTP stored in hashed format
- JWT stored in HTTP-only cookies
- Role-based access control
- Duplicate likes prevented at database level
- Input validation handled at service layer

---

## 🧪 API Testing

You can test all APIs using Postman or Thunder Client.

---

## 👨‍💻 Author

Shivam  
BTech Computer Science Engineering  
Backend Developer

---

## 📄 License

This project is built for educational and portfolio purposes.
