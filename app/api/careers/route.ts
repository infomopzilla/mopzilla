import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Nodemailer transporter setup (Gmail example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, // your gmail address
        pass: process.env.SMTP_PASSWORD, // your gmail app password
      },
    })

    await transporter.sendMail({
      from: `"Mopzilla Careers" <${process.env.SMTP_USER}>`,
      to: "info@mopzilla.cleaning",
      subject: `New Job Application: ${formData.position}`,
      html: `
        <h2>New Application Received</h2>
        <p><b>Name:</b> ${formData.name}</p>
        <p><b>Email:</b> ${formData.email}</p>
        <p><b>Phone:</b> ${formData.phone}</p>
        <p><b>Position:</b> ${formData.position}</p>
        <p><b>Message:</b> ${formData.message || "N/A"}</p>
      `,
    })

    return NextResponse.json({ message: "Application sent successfully!" }, { status: 200 })
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send application.", error: error.message },
      { status: 500 }
    )
  }
}