import { type NextRequest, NextResponse } from "next/server"
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

    const mailOptions = {
      from: `"Mopzilla Contact" <${process.env.SMTP_USER}>`,
      to: "info@mopzilla.cleaning",
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Inquiry Type:</strong> ${formData.inquiryType}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ success: false, message: "Failed to process contact form" }, { status: 500 })
  }
}
