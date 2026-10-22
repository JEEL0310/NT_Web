# Nuvion Technologies - Backend Mail & reCAPTCHA API

Standalone Node.js / Express backend service for contact form submission, Gmail SMTP delivery, and Google reCAPTCHA v2 verification.

---

## 🚀 Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   # Or with automatic reload during development:
   npm run dev
   ```

3. Server runs on `http://localhost:5050`.
   - Health check: `http://localhost:5050/api/health`
   - Form submission endpoint: `POST http://localhost:5050/api/contact`

---

## 🌐 Deploying to Free Cloud Hosting (e.g. Render.com)

To make your contact form work with your GitHub Pages frontend:

1. Create a new GitHub repository for this `NT_Backend` project and push this code.
2. Go to [Render.com](https://render.com) (free) → Click **New +** → **Web Service**.
3. Connect your backend GitHub repository.
4. Settings:
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
5. In the **Environment Variables** tab, add:
   - `SMTP_USER` = `info@nuviontech.com`
   - `SMTP_PASS` = your 16-character Google App Password
   - `SMTP_TO` = `info@nuviontech.com`
   - `RECAPTCHA_SECRET_KEY` = your reCAPTCHA secret key
6. Render will generate your live backend URL (e.g., `https://nuvion-backend.onrender.com`).
7. In your frontend repository (`NT_Web`), set:
   ```env
   VITE_API_URL=https://nuvion-backend.onrender.com
   ```
   Now your GitHub Pages frontend communicates with this backend seamlessly!
