# ChatsApp 💬

<div align="center">
  
  ![ChatsApp Banner](https://img.shields.io/badge/ChatsApp-Real--time%20Messaging-blue?style=for-the-badge)
  
  A modern, real-time chat application built with the MERN stack, featuring instant messaging, JWT authentication, and a sleek UI powered by TailwindCSS and DaisyUI.

  [![Live Demo](https://img.shields.io/badge/demo-online-success?style=for-the-badge&logo=vercel)](https://chatsapp-3j9i.onrender.com/)
</div>

---

## ✨ Features

### 🔐 Authentication & Security
- **JWT-based authentication** with secure token handling
- **Password encryption** using bcrypt
- Protected routes and authorization middleware
- Session management

### 💬 Real-time Messaging
- **Instant messaging** powered by Socket.IO
- Real-time message delivery and updates
- Message read receipts
- Typing indicators

### 👥 User Features
- **Online/Offline status** tracking
- User profiles with avatar support
- **Image uploads** via Cloudinary integration
- User search and discovery

### 🎨 UI/UX
- **Responsive design** that works on all devices
- **Multiple theme support** (light/dark modes)
- Modern and intuitive interface
- Smooth animations and transitions
- Custom notification system

### 🛠️ Technical Features
- **Global state management** with Zustand
- **Error handling** on both client and server
- Optimized performance
- Clean and maintainable code structure

---


## 📸 Screenshots

### Signup Page
![Signup Page](./screenshots/signup.png)
*Create a new account with username, email, and password*

### Login Page
![Login Page](./screenshots/login.png)
*Secure login with JWT authentication*

### Homepage / Chat Interface
![Homepage](./screenshots/homepage.png)
*Real-time messaging interface with online users sidebar*

### Settings Page
![Settings Page](./screenshots/settings.png)
*Customize your experience with multiple theme options*

### Profile Page
![Profile Page](./screenshots/profile.png)
*View and update your profile information and avatar*

---

## ⚙️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-433E38?style=for-the-badge&logo=react&logoColor=white)

- **React 18** - UI library
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **Zustand** - Lightweight state management
- **Socket.IO Client** - Real-time communication
- **Axios** - HTTP client

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)

- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Socket.IO** - Real-time bidirectional communication
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Image upload and management

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local or Atlas account)
- **Cloudinary account** (for image uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/satyamgagre/mern-chats-app.git
   cd mern-chats-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add the following:
   
   ```env
   # Server Configuration
   PORT=5001
   NODE_ENV=development
   
   # Database
   MONGODB_URI=your_mongodb_connection_string
   
   # JWT Secret
   JWT_SECRET=your_super_secret_jwt_key
   
   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

   **How to get these values:**
   - **MongoDB URI**: Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or use a local MongoDB instance
   - **JWT Secret**: Generate a random string (e.g., `openssl rand -base64 32`)
   - **Cloudinary**: Sign up at [Cloudinary](https://cloudinary.com/) and get your credentials from the dashboard

4. **Build the application**
   ```bash
   npm run build
   ```

5. **Start the application**
   ```bash
   npm start
   ```

6. **Access the application**
   
   Open your browser and navigate to `http://localhost:5001`

---

## 💻 Usage

### Development Mode

To run the application in development mode with hot-reload:

```bash
# Run backend and frontend concurrently
npm run dev
```

### Production Mode

```bash
# Build the frontend
npm run build

# Start the production server
npm start
```

### Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Run in development mode
- `npm run build` - Build the frontend for production
- `npm run server` - Run backend only
- `npm run client` - Run frontend only

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---



<div align="center">
  
  ### ⭐ If you found this project helpful, please give it a star!
  
  Made with ❤️ by Satyam Gagre

</div>
