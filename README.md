# 🔗 URL Shortener

A full-stack URL Shortener web application built using the MERN stack. It allows users to create shortened URLs, manage them from a dashboard, and securely authenticate using JWT-based authentication.

---

## 🚀 Features

### Authentication
- User Registration & Login
- JWT Authentication using HTTP-only Cookies
- Protected Dashboard

### URL Management
- Generate Short URLs
- Create Custom Short URLs (Authenticated Users)
- Automatic Unique URL Generation
- Redirect Short URLs to Original URLs

### Dashboard
- View All Created URLs
- Click Analytics (Track Number of Visits)
- Copy Short URL with One Click
- Delete URLs (if implemented)

### Security
- Password Hashing with bcrypt
- Secure Cookie-based Authentication
- Protected API Routes

### UI
- Responsive Design
- Clean Dashboard Interface
- Toast Notifications
- Loading States
---


## 📂 Project Structure

```
url-shortener/
│
├── client/
├── server/
└── README.md
```

---

## ⚙ Installation

Clone the repository

```bash
git clone https://github.com/devanshsingh05/url-shortener.git
```

Move into the project

```bash
cd url-shortener
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

Example:

```env
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
CLIENT_URL=http://localhost:5173
```

---

## Future Improvements

- QR Code Generation
- Click Analytics
- Custom Aliases
- Expiring Links
- User Profile
- Dark Mode

---

## Author

**Devansh**

GitHub: https://github.com/devanshsingh05
