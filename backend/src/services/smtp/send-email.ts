import { ENV } from "../../../server.ts";
import { createTransport } from "nodemailer";

export async function sendEmail() {
  const transporter = createTransport({
    host: ENV.SMTP_HOST,
    port: ENV.SMTP_PORT,
    secure: false,
  });

  const info = await transporter.sendMail({
    from: "'TicketMaster' <ticketmaster@ticketmaster.com>",
    to: "johndoe@johndoe.com",
    subject: "Esse é um email teste",
    text: "Testando esse email atravês do protocolo SMTP",
    html: "<h1>Testando esse email atravês do protocolo SMTP</h1>",
  });

  console.log("Email enviado: ", info.response);
}
