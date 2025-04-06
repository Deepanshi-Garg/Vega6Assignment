## 📚 Vega6 Assignment - Blog Manager

A full-stack blog manager platform where users can **sign up, log in, upload a profile picture**, and **manage their own blogs** (add, view, delete). Built with **MongoDB, Express, Node.js**, and a **vanilla JavaScript frontend**.

---

## Deplolyed App

- 🔗 *Frontend:* [https://blog-manager-v6.netlify.app](https://blog-manager-v6.netlify.app)  
- 🔗 *Backend:* [https://vega6assignment-4c5r.onrender.com](https://vega6assignment-4c5r.onrender.com)
---

### ✨ Features

- 🔐 User authentication with JWT
- 🖼 Upload and update profile picture
- 📝 Add, view, and delete personal blogs
- 🌍 Public blog feed
- ☁️ Cloudinary integration for image uploads
- 🎯 Route protection with middleware
- 📦 RESTful backend APIs
- ⚡ Clean vanilla JavaScript frontend

---

## 🏁 Getting Started

### ✅ Prerequisites

- Node.js
- MongoDB
- Cloudinary account
- Web browser

---

## 📁 Folder Structure

```bash
Deepanshi-Blog-Manager/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── blog.controller.js
│   │   └── user.controller.js
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── uploadPic.middleware.js
│   ├── models/
│   │   ├── blogs.model.js
│   │   └── users.model.js
│   ├── routes/
│   │   ├── blogs.route.js
│   │   └── users.route.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
├── Frontend/
│   ├── login/
│   │   └── login.html
│   ├── signup/
│   │   └── signup.html
│   ├── blogs.html
│   ├── index.html
└── README.md
```

---

## 🔐 Environment Variables (`.env`)

In the `backend/` directory, create a `.env` file:

```env
PORT=5000
MONGODB_URL=your_mongodb_connection_string
JWT_TOKEN_KEY=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🛠️ Backend Setup

```bash
cd backend
npm install
npm start
```

---

## 🌐 Frontend Usage

Open any of the following HTML files in a browser:

- `Frontend/index.html` – Homepage
- `Frontend/signup/signup.html` – Signup Page
- `Frontend/login/login.html` – Login Page
- `Frontend/blogs.html` – Blog Manager (Add, Delete Blogs)


---

## 📦 API Endpoints

### 🔐 User Auth

- `POST /signup` – Register a new user
- `POST /login` – Login and receive a JWT token
- `PATCH /update-profile-pic` – Update profile picture (Auth required)

### 📝 Blogs

- `GET /blogs/` – Get all blogs (Public)
- `GET /blogs/my-blogs` – Get logged-in user's blogs
- `POST /blogs/add` – Add new blog (Auth required)
- `DELETE /blogs/delete/:id` – Delete blog by ID (Auth required)

---

## ✅ Flow Summary

1. Visit the login/signup pages
2. On successful login, JWT is stored in `localStorage`
3. Dashboard (blogs.html) fetches and shows user-specific blogs
4. Users can add or delete blogs
5. Profile pictures are managed via Cloudinary

---

## 🙋 Author

**Deepanshi Garg**

---

Let me know if you'd like this README exported to a file or want screenshots added for visual aid.
