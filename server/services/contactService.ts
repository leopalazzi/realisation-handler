import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { google } from "googleapis";

class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}


// Service pour envoyer l'e-mail
export const sendEmail = async (
 data: any, to :string
) => {
  const {name, surname, email, message }= data;
  if (!name || !surname || !email || !message ) {
    throw new CustomError(
      "Veuillez fournir toutes les informations nécessaires.",
      400
    );
  }
  try {
    // Chemin du fichier HTML du template
    const templatePath = path.join(
      __dirname,
      "..",
      "templates",
      "template.html"
    );

    // Lecture du contenu du fichier HTML
    const template = fs.readFileSync(templatePath, "utf-8");

    // Remplacement des variables avec les données de l'utilisateur
    const html = template
      .replace(/{{name}}/g, name)
      .replace(/{{surname}}/g, surname)
      .replace(/{{email}}/g, email)
      .replace(/{{message}}/g, message);

    // Configuration du transporteur SMTP pour l'envoi de l'e-mail
    const transporter = nodemailer.createTransport({
      // Configuration du transporteur SMTP (e.g., Gmail)
      // Consultez la documentation de Nodemailer pour obtenir les paramètres spécifiques au fournisseur de messagerie.
      service: "gmail",
      auth: {
        user: "leopalazzi751@gmail.com",
        pass: "wgjfmmfhrrvziqfu",
      },
    });

    // Contenu du message
    const emailMessage = {
      from: "leopalazzi751@gmail.com",
      to: to,
      subject: "Nouvelle demande de contact",
      html: html,
    };

    // Envoi de l'e-mail
    await transporter.sendMail(emailMessage);
  } catch (error) {
    console.log(error)
    throw new CustomError('Erreur lors de l\'envoi de l\'e-mail', 500);
  }
};
