"use server";
export async function sendEmail(
    email: string,
    name: string,
    message: string
): Promise<boolean | undefined> {
    if (!email || !name) {
        return false;
    }
    console.log(email, name, message);

    const { type, message: msg } = await _sendEmail(
        "moodlyia@gmail.com",
        "New message from Moodly",
        `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );

    if (type === "error") {
        console.error(msg);
        return false;
    }
    return true;
}

const nodemailer = require("nodemailer");
("server only");
async function _sendEmail(
    to: string,
    subject: string,
    data: string
): Promise<{ type: "success" | "error"; message: string }> {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const html = `<h1>${subject}</h1>\n\n<p>${data}</p>`;
    const from = `"Moodly" <info@moodly.ai>`;
    const info = await transporter.sendMail({
        from,
        to,
        subject,
        html,
    });
    if (!info.accepted.length) {
        return {
            type: "error",
            message: "Failed to send email",
        };
    }

    return {
        type: "success",
        message: "Email sent successfully",
    };
}
