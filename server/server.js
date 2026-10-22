import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

// Initial env load
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Verify Google reCAPTCHA Token with Google's API
 */
async function verifyRecaptcha(token) {
  dotenv.config({ override: true });
  const secretKey =
    process.env.RECAPTCHA_SECRET_KEY ||
    "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";

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
  // Always refresh latest env variables from .env
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
    smtpUser: process.env.SMTP_USER || "Not configured",
    smtpConfigured: Boolean(process.env.SMTP_USER && process.env.SMTP_PASS),
    timestamp: new Date().toISOString(),
  });
});

// Contact Form Endpoint
app.post("/api/contact", async (req, res) => {
  try {
    dotenv.config({ override: true });
    const recipient = process.env.SMTP_TO || "info@nuviontech.com";

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

    // 1. Validate required fields
    if (!first || !last || !email || !phone || !company || !message) {
      return res.status(400).json({
        success: false,
        message:
          "Please fill in all required fields (First name, Last name, Work email, Mobile number, Company, and Message).",
      });
    }

    // 2. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid work email address.",
      });
    }

    // 3. Verify Google reCAPTCHA token
    const recaptchaResult = await verifyRecaptcha(recaptchaToken);
    if (!recaptchaResult.success) {
      return res.status(400).json({
        success: false,
        message:
          "reCAPTCHA validation failed. Please check the 'I'm not a robot' box and try again.",
        errors: recaptchaResult["error-codes"],
      });
    }

    // 4. Construct Email Content
    const senderFullName = `${first} ${last}`.trim();
    const submissionDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const subject = `[New Technical Enquiry] ${topic ? topic + " - " : ""}${senderFullName}`;

    const textBody = `
==================================================
NEW TECHNICAL ENQUIRY - NUVION TECHNOLOGIES
==================================================
Submitted: ${submissionDate} (IST)

CLIENT DETAILS:
- Full Name: ${senderFullName}
- Work Email: ${email}
- Mobile / Phone: ${phone}
- Company / Organization: ${company}

PROJECT SCOPE:
- Engineering Domain / Topic: ${topic || "General Architecture Review"}
- Target Timeline: ${timeline || "Flexible"}

PROJECT DETAILS & BOTTLENECK DESCRIPTION:
${message}
==================================================
Reply-To: ${email}
`;

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6fb; margin: 0; padding: 24px; color: #0f172a; }
    .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
    .header { background: linear-gradient(135deg, #02246A 0%, #082E78 50%, #1456D8 100%); padding: 32px; color: #ffffff; text-align: left; }
    .badge { display: inline-block; padding: 4px 10px; background: rgba(255,255,255,0.18); border-radius: 20px; font-size: 11px; font-family: monospace; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 12px; }
    .title { margin: 0; font-size: 22px; font-weight: 700; }
    .body { padding: 32px; }
    .section-title { font-size: 12px; font-family: monospace; text-transform: uppercase; letter-spacing: 1px; color: #1456D8; font-weight: 700; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-top: 24px; margin-bottom: 14px; }
    .grid { display: table; width: 100%; border-spacing: 0; }
    .row { display: table-row; }
    .col-label { display: table-cell; width: 35%; padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600; }
    .col-val { display: table-cell; width: 65%; padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 500; }
    .msg-box { background: #f8fafc; border-left: 4px solid #1456D8; padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #1e293b; margin-top: 8px; white-space: pre-wrap; }
    .footer { background: #f8fafc; padding: 20px 32px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
    .reply-btn { display: inline-block; margin-top: 18px; padding: 10px 24px; background: #02246A; color: #ffffff !important; text-decoration: none; font-size: 13px; font-weight: 600; border-radius: 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">Nuvion Technologies Contact Inbound</div>
      <h1 class="title">New Architecture Enquiry</h1>
      <p style="margin: 6px 0 0; opacity: 0.85; font-size: 13px;">Received on ${submissionDate} (IST)</p>
    </div>

    <div class="body">
      <div class="section-title">Client Information</div>
      <div class="grid">
        <div class="row">
          <div class="col-label">Full Name:</div>
          <div class="col-val"><strong>${senderFullName}</strong></div>
        </div>
        <div class="row">
          <div class="col-label">Work Email:</div>
          <div class="col-val"><a href="mailto:${email}" style="color: #1456D8;">${email}</a></div>
        </div>
        <div class="row">
          <div class="col-label">Mobile Number:</div>
          <div class="col-val">${phone}</div>
        </div>
        <div class="row">
          <div class="col-label">Organization:</div>
          <div class="col-val">${company}</div>
        </div>
      </div>

      <div class="section-title">Project Scope</div>
      <div class="grid">
        <div class="row">
          <div class="col-label">Engineering Domain:</div>
          <div class="col-val"><span style="background: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 6px; font-size: 12px; font-weight: 600;">${topic || "General Architecture"}</span></div>
        </div>
        <div class="row">
          <div class="col-label">Target Timeline:</div>
          <div class="col-val">${timeline || "Flexible"}</div>
        </div>
      </div>

      <div class="section-title">Project Overview &amp; Bottlenecks</div>
      <div class="msg-box">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>

      <div style="text-align: center; margin-top: 24px;">
        <a href="mailto:${email}?subject=${encodeURIComponent("Re: Architecture Enquiry - Nuvion Technologies")}" class="reply-btn">
          Direct Reply to ${first} &rarr;
        </a>
      </div>
    </div>

    <div class="footer">
      This inquiry was submitted via the contact form on <a href="https://nuviontech.com" style="color: #1456D8;">nuviontech.com</a> and validated with Google reCAPTCHA.
    </div>
  </div>
</body>
</html>
`;

    // 5. Send Email via Live Gmail / SMTP Transporter
    const transporter = createTransporter();

    const mailOptions = {
      from:
        process.env.SMTP_FROM ||
        `"Nuvion Technologies" <${process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: email,
      subject: subject,
      text: textBody,
      html: htmlBody,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(
      `\n✅ Live email delivered successfully to ${recipient} (Message ID: ${info.messageId})`
    );

    return res.status(200).json({
      success: true,
      message: `Your technical enquiry has been successfully delivered to ${recipient}.`,
      recipient,
    });
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "An internal error occurred while sending your message. Please try again or email info@nuviontech.com directly.",
    });
  }
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`🚀 Nuvion Backend Server running on port ${PORT}`);
  console.log(`📧 Target Recipient: ${process.env.SMTP_TO || "info@nuviontech.com"}`);
  console.log(`🛡️  reCAPTCHA Verification: Enabled`);
});
