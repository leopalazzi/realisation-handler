"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
// Service pour envoyer l'e-mail
const sendEmail = async (data, to) => {
    const { name, surname, email, message } = data;
    console.log(name);
    if (!name || !surname || !email || !message) {
        throw new CustomError("Veuillez fournir toutes les informations nécessaires.", 400);
    }
    try {
        // Chemin du fichier HTML du template
        const templatePath = path_1.default.join(__dirname, "..", "templates", "template.html");
        // Lecture du contenu du fichier HTML
        const template = fs_1.default.readFileSync(templatePath, "utf-8");
        // Remplacement des variables avec les données de l'utilisateur
        const html = template
            .replace(/{{name}}/g, name)
            .replace(/{{surname}}/g, surname)
            .replace(/{{email}}/g, email)
            .replace(/{{message}}/g, message);
        console.log(html);
        // Configuration du transporteur SMTP pour l'envoi de l'e-mail
        const transporter = nodemailer_1.default.createTransport({
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
    }
    catch (error) {
        console.log(error);
        throw new CustomError('Erreur lors de l\'envoi de l\'e-mail', 500);
    }
};
exports.sendEmail = sendEmail;
