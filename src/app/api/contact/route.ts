import {
  ContactFormSchema,
  ContactFormSchemaType,
} from "@/components/contact/types";
import { generateEmail } from "@/utils/generate-email";
import { NextRequest, NextResponse } from "next/server";
import nodemailer, { SendMailOptions } from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  // host: process.env.EMAIL_HOSTNAME as string,
  // port: Number(process.env.EMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function sendMail(mailOptions: SendMailOptions) {
  new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info.messageId);
      }
    });
  });
}

export async function POST(request: NextRequest) {
  const data: ContactFormSchemaType = await request.json();
  const dataValidation = ContactFormSchema.safeParse(data);

  if (!dataValidation.success) {
    // if the data of the request body isn't valid
    // respond with unsuccessful message
    const error = dataValidation.error.format();
    return Response.json({
      success: false,
      reason: error,
    });
  }

  const mailOptions: SendMailOptions = {
    from: {
      name: "AideEducation.fr - Contact",
      address: process.env.EMAIL_USERNAME as string,
    },
    to: process.env.EMAIL_DESTINATION,
    subject: data.subject,
    html: generateEmail(data),
  };

  try {
    await sendMail(mailOptions);
    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    return Response.json(
      { success: false, reason: "Server Error!" },
      { status: 500 }
    );
  }
}
