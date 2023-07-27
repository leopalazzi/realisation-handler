import { Request, Response } from "express";
import { sendEmail } from "../services/contactService";

// Contrôleur pour créer un nouvel utilisateur
export const contactUser = (req: Request, res: Response) => {
  const {
    data,
    to,
  } = req.body;

  // Validation des données ici si nécessaire

  sendEmail(data, to)
    .then(() => {
      res.status(200).json({ message: "E-mail envoyé avec succès" });
    })
    .catch((error) => {
      const { message, statusCode } = error;
      res.status(statusCode).json({ message: message });
    });
};
