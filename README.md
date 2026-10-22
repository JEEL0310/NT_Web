# Nuvion Technologies Web Platform

This repository is organized into two independent sub-projects:

```
NT_Web/
├── frontend/    # React 19 + Vite + Tailwind CSS (Ready for GitHub Pages)
└── backend/     # Node.js + Express + Nodemailer + reCAPTCHA v2 (Ready for Render/Railway/VPS)
```

---

## ⚡ Quick Start (Local Development)

### 1. Run the Backend
```bash
cd backend
npm install
npm start
```
Runs at: `http://localhost:5050` (Health: `http://localhost:5050/api/health`)

### 2. Run the Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs at: `http://localhost:5173`

---

## 🌐 Deploying to Production

### 1. Backend (Free Cloud Hosting on Render or Railway)
Because GitHub Pages only serves static files and cannot execute Node.js:
1. Push the `backend/` folder to a repository (or select `backend` as the Root Directory in Render).
2. Set build command: `npm install` and start command: `node server.js`.
3. Add your environment variables (`SMTP_USER`, `SMTP_PASS`, `SMTP_TO`, `RECAPTCHA_SECRET_KEY`).
4. Copy your live backend URL (e.g. `https://your-backend.onrender.com`).

### 2. Frontend (GitHub Pages)
In `frontend/.env`, set:
```env
VITE_API_URL=https://your-backend.onrender.com
```
Then build and deploy:
```bash
cd frontend
npm run build
```
Upload the `frontend/dist` directory to GitHub Pages.
