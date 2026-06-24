import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactRequestBody = {
  name?: string;
  email?: string;
  phone?: string;
  coverageType?: string;
  date?: string;
  location?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const coverageType = body.coverageType?.trim();
    const date = body.date?.trim();
    const location = body.location?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          message: "Nombre, email y mensaje son obligatorios.",
        },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          message: "El email no tiene un formato válido.",
        },
        { status: 400 },
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? 465);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM;
    const contactTo = process.env.CONTACT_TO;

    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom || !contactTo) {
      return NextResponse.json(
        {
          message: "Faltan variables SMTP en el servidor.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: smtpFrom,
      to: contactTo,
      replyTo: email,
      subject: `Nueva solicitud de cobertura - ${name}`,
      text: `
Nueva solicitud recibida desde la web de David Canales.

Nombre: ${name}
Email: ${email}
Teléfono: ${phone || "No indicado"}
Tipo de cobertura: ${coverageType || "No indicado"}
Fecha: ${date || "No indicada"}
Lugar: ${location || "No indicado"}

Mensaje:
${message}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Nueva solicitud recibida desde la web de David Canales</h2>

          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone || "No indicado"}</p>
          <p><strong>Tipo de cobertura:</strong> ${coverageType || "No indicado"}</p>
          <p><strong>Fecha:</strong> ${date || "No indicada"}</p>
          <p><strong>Lugar:</strong> ${location || "No indicado"}</p>

          <hr />

          <p><strong>Mensaje:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({
      message: "Solicitud enviada correctamente.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        message: "No se pudo enviar la solicitud.",
      },
      { status: 500 },
    );
  }
}