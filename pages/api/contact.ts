// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
import * as nodeMailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ message: "Missing fields" });
    return;
  }

  const msg = {
    to: "olive@socdevassociation.org",
    from: "olive@socdevassociation.org",
    replyTo: email,
    subject: `Site Contact from ${name}`,
    name,
    text: message,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    res.status(500).json({ message: `Send failed: error: ${error}` });
  }
}
