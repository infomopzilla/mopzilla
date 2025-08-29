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
      from: `"Mopzilla Quote" <${process.env.SMTP_USER}>`,
      to: "info@mopzilla.cleaning",
      subject: `New Quote Request from ${formData.name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Address:</strong> ${formData.address}</p>
        <p><strong>Services:</strong> ${formData.services.join(", ")}</p>
        <p><strong>Frequency:</strong> ${formData.frequency}</p>
        <p><strong>Property Size:</strong> ${formData.propertySize}</p>
        <p><strong>Preferred Date:</strong> ${formData.preferredDate}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: "Quote request submitted successfully",
    })
  } catch (error) {
    console.error("Error processing quote request:", error)
    return NextResponse.json({ success: false, message: "Failed to process quote request" }, { status: 500 })
  }
}