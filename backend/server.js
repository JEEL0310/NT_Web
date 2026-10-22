import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

// Initial env load
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

// Enable CORS for all origins (Local dev, GitHub Pages, Custom Domains)
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Verify Google reCAPTCHA Token with Google's API
 */
async function verifyRecaptcha(token) {
  dotenv.config({ override: true });
  const secretKey =
    process.env.RECAPTCHA_SECRET_KEY ||
    "6LfI7GoqAAAAAC6AFngKCN48CoOhaEN1UtQMziYg";

  if (!token) return { success: false, message: "Missing reCAPTCHA token" };

  try {
    const params = new URLSearchParams({
      secret: secretKey,
      response: token,
    });

    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return { success: false, message: "Verification request failed" };
  }
}

/**
 * Create Nodemailer Transporter strictly using configured SMTP credentials
 */
function createTransporter() {
  dotenv.config({ override: true });

  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const user = process.env.SMTP_USER;
  const rawPass = process.env.SMTP_PASS || "";
  // Strip any spaces Google displays in 16-character App Passwords (e.g. "abcd efgh ijkl mnop")
  const pass = rawPass.replace(/\s+/g, "");
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  if (!user || !pass) {
    throw new Error(
      "SMTP credentials missing. Please ensure SMTP_USER and SMTP_PASS are set in .env."
    );
  }

  // Gmail / Google Workspace Transport
  if (
    host.includes("gmail") ||
    process.env.SMTP_SERVICE === "gmail"
  ) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
  }

  // Standard Custom SMTP Host Transport
  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

// Health check endpoint
app.get("/api/health", (req, res) => {
  dotenv.config({ override: true });
  const recipient = process.env.SMTP_TO || "info@nuviontech.com";

  res.json({
    status: "ok",
    service: "Nuvion Technologies Contact API",
    recipient,
    smtpConfigured: Boolean(process.env.SMTP_USER && process.env.SMTP_PASS),
    timestamp: new Date().toISOString(),
  });
});

// Root check endpoint
app.get("/", (req, res) => {
  res.send("Nuvion Technologies Backend Service is Active.");
});

// Primary Contact Form Submission Endpoint
app.post("/api/contact", async (req, res) => {
  const {
    first,
    last,
    email,
    phone,
    company,
    topic,
    timeline,
    message,
    recaptchaToken,
  } = req.body;

  // Basic required fields validation
  if (!first || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields (First Name, Email, and Message).",
    });
  }

  // Verify reCAPTCHA token
  const recaptchaResult = await verifyRecaptcha(recaptchaToken);
  if (!recaptchaResult.success) {
    console.warn("reCAPTCHA failed:", recaptchaResult);
    return res.status(400).json({
      success: false,
      message:
        "reCAPTCHA verification failed. Please complete the verification again.",
      errors: recaptchaResult["error-codes"],
    });
  }

  const fullName = `${first} ${last || ""}`.trim();
  dotenv.config({ override: true });

  const recipientEmail = process.env.SMTP_TO || "info@nuviontech.com";
  const senderEmail = process.env.SMTP_USER || "info@nuviontech.com";
  const senderDisplayName = process.env.SMTP_FROM || `"Nuvion Portal" <${senderEmail}>`;

  // Professional HTML Email Template
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f8fafc;
            color: #0f172a;
            margin: 0;
            padding: 24px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          }
          .header {
            background: linear-gradient(135deg, #02246A, #1456D8);
            padding: 28px;
            color: #ffffff;
          }
          .header h1 {
            margin: 0 0 6px 0;
            font-size: 20px;
            letter-spacing: -0.02em;
          }
          .header p {
            margin: 0;
            font-size: 13px;
            opacity: 0.85;
          }
          .body {
            padding: 28px;
          }
          .field-row {
            margin-bottom: 16px;
            border-bottom: 1px solid #f1f5f9;
            padding-bottom: 12px;
          }
          .label {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #64748b;
            font-weight: 700;
            margin-bottom: 4px;
          }
          .value {
            font-size: 14px;
            color: #0f172a;
            font-weight: 500;
          }
          .message-box {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 16px;
            margin-top: 16px;
            font-size: 14px;
            line-height: 1.6;
            white-space: pre-wrap;
          }
          .footer {
            background: #f8fafc;
            border-top: 1px solid #e2e8f0;
            padding: 16px 28px;
            font-size: 12px;
            color: #94a3b8;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Architecture Review Request</h1>
            <p>Submitted via Nuvion Technologies Contact Portal</p>
          </div>
          <div class="body">
            <div class="field-row">
              <div class="label">Client Name</div>
              <div class="value">${fullName}</div>
            </div>
            <div class="field-row">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ${
              phone
                ? `<div class="field-row">
                    <div class="label">Phone / WhatsApp</div>
                    <div class="value"><a href="tel:${phone}">${phone}</a></div>
                  </div>`
                : ""
            }
            ${
              company
                ? `<div class="field-row">
                    <div class="label">Company / Organization</div>
                    <div class="value">${company}</div>
                  </div>`
                : ""
            }
            ${
              topic
                ? `<div class="field-row">
                    <div class="label">Selected Discipline / Scope</div>
                    <div class="value">${topic}</div>
                  </div>`
                : ""
            }
            ${
              timeline
                ? `<div class="field-row">
                    <div class="label">Target Timeline</div>
                    <div class="value">${timeline}</div>
                  </div>`
                : ""
            }
            <div>
              <div class="label">Project Scope & Architecture Details</div>
              <div class="message-box">${message}</div>
            </div>
          </div>
          <div class="footer">
            Delivered to ${recipientEmail} • Protected by Google reCAPTCHA
          </div>
        </div>
      </body>
    </html>
  `;

  // Plain Text Version
  const textContent = `
New Architecture Review Request
---------------------------------------
Client: ${fullName}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}
${company ? `Company: ${company}` : ""}
${topic ? `Discipline: ${topic}` : ""}
${timeline ? `Timeline: ${timeline}` : ""}

Project Scope / Message:
${message}

---------------------------------------
Delivered to: ${recipientEmail}
  `;

  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: senderDisplayName,
      to: recipientEmail,
      replyTo: `${fullName} <${email}>`,
      subject: `New Technical Inquiry: ${company || fullName} - ${topic || "General"}`,
      text: textContent,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId, "to:", recipientEmail);

    return res.status(200).json({
      success: true,
      message: `Your inquiry has been successfully transmitted to ${recipientEmail}. Our team will review and reply within 24 hours.`,
      recipient: recipientEmail,
      messageId: info.messageId,
    });
  } catch (mailError) {
    console.error("Nodemailer transmission error:", mailError);
    return res.status(500).json({
      success: false,
      message:
        "Failed to deliver email through mail server. Please try again or contact info@nuviontech.com directly.",
      error: mailError.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(` Nuvion Technologies Mail Backend`);
  console.log(` Running on: http://localhost:${PORT}`);
  console.log(` Health:     http://localhost:${PORT}/api/health`);
  console.log(` Target:     ${process.env.SMTP_TO || "info@nuviontech.com"}`);
  console.log(`===============================================`);
});
