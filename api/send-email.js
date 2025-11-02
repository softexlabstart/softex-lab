import nodemailer from 'nodemailer';

// Configuración del transportador de correo
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, businessType, locations, message } = req.body;

    // Validación básica
    if (!name || !email || !phone || !businessType || !locations) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Enviar el correo
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.TO_EMAIL || 'info@softexlab.com',
      subject: `Nueva solicitud de demo - ${name}`,
      text: `
        Nueva solicitud de demo:
        
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone}
        Tipo de negocio: ${businessType}
        Número de sedes: ${locations}
        Mensaje: ${message || 'No especificado'}
      `,
      html: `
        <h2>Nueva solicitud de demo</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Tipo de negocio:</strong> ${businessType}</p>
        <p><strong>Número de sedes:</strong> ${locations}</p>
        <p><strong>Mensaje:</strong> ${message || 'No especificado'}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Error sending email' });
  }
}