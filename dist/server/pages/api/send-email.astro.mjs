import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const OPTIONS = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
};
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});
const POST = async ({ request }) => {
  try {
    const raw = await request.text();
    if (!raw) {
      return new Response(JSON.stringify({ error: "Empty request body" }), { status: 400 });
    }
    let data;
    try {
      data = JSON.parse(raw);
    } catch (err) {
      return new Response(JSON.stringify({ error: "Invalid JSON body" }), { status: 400 });
    }
    const { name, email, phone, businessType, locations, message } = data;
    if (!name || !email || !phone || !businessType || !locations) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.SMTP_HOST) {
      console.error("Missing SMTP configuration", {
        SMTP_USER: Boolean(process.env.SMTP_USER),
        SMTP_PASS: Boolean(process.env.SMTP_PASS),
        SMTP_HOST: Boolean(process.env.SMTP_HOST)
      });
      return new Response(JSON.stringify({ error: "Missing SMTP configuration" }), { status: 500 });
    }
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.TO_EMAIL || "info@softexlab.com",
      replyTo: email,
      subject: `Nueva solicitud de demo - ${name}`,
      text: `
        Nueva solicitud de demo:
        
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone}
        Tipo de negocio: ${businessType}
        Número de sedes: ${locations}
        Mensaje: ${message || "No especificado"}
      `,
      html: `
        <h2>Nueva solicitud de demo</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Tipo de negocio:</strong> ${businessType}</p>
        <p><strong>Número de sedes:</strong> ${locations}</p>
        <p><strong>Mensaje:</strong> ${message || "No especificado"}</p>
      `
    });
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    });
  } catch (error) {
    console.error("Error sending email:", error);
    const isProd = process.env.NODE_ENV === "production";
    return new Response(
      JSON.stringify({ error: isProd ? "Error sending email" : error?.message || String(error) }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  OPTIONS,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
