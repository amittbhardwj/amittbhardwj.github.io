import { NextRequest, NextResponse } from "next/server";

// TODO: Connect to an email service for production
// Recommended options:
//   - Resend (https://resend.com) - simple API, generous free tier
//   - SendGrid (https://sendgrid.com) - enterprise-grade
//   - Nodemailer with SMTP
//
// Example with Resend:
//   import { Resend } from 'resend';
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({ from: 'portfolio@yourdomain.com', to: 'amitt.bhardwj@gmail.com', ... });

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();
    const { name, email, subject, message } = body;

    // Validate
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Log submission (replace with actual email sending in production)
    console.log("📬 New contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Message received! I'll get back to you soon." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
