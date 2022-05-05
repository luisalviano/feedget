import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a08e0dcb9ddcd5",
    pass: "4dd51e9be7b35a"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
      await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Maria Luiza Salviano <luizasalviano@gmail.com>',
        subject: subject,
        html: body
      });
  };
}