import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: "All fields are required" }),
      { status: 400 }
    );
  }

  try {
    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Email options with a professional HTML template
    const mailOptions = {
      from: email,
      to: `${process.env.GMAIL_USER}, ${process.env.SECOND_EMAIL}, ${process.env.THIRD_EMAIL}`,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; color: #333; background-color: #f4f4f4; padding: 20px;">
            <div style="background-color: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #00bcd4;">New Contact Form Submission</h2>
              <p style="font-size: 16px; color: #555;">You have received a new message through your contact form. Here are the details:</p>
              <table style="width: 100%; border: 0; margin-top: 20px; padding: 10px 0;">
                <tr>
                  <td style="padding: 8px; font-weight: bold; color: #333;">Name:</td>
                  <td style="padding: 8px;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold; color: #333;">Email:</td>
                  <td style="padding: 8px;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold; color: #333;">Message:</td>
                  <td style="padding: 8px;">${message}</td>
                </tr>
              </table>
              <p style="font-size: 14px; color: #888; margin-top: 20px;">Thank you for reaching out. We will get back to you as soon as possible.</p>
            </div>
          </body>
        </html>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error details:", error);  
    return new Response(
      JSON.stringify({
        error: `Failed to send message. Error: ${error.message}`,
      }),
      { status: 500 }
    );
  }
}
