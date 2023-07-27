"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactUser = void 0;
const contactService_1 = require("../services/contactService");
// Contrôleur pour créer un nouvel utilisateur
const contactUser = (req, res) => {
    const { data, to, } = req.body;
    // Validation des données ici si nécessaire
    (0, contactService_1.sendEmail)(data, to)
        .then(() => {
        res.status(200).json({ message: "E-mail envoyé avec succès" });
    })
        .catch((error) => {
        const { message, statusCode } = error;
        res.status(statusCode).json({ message: message });
    });
};
exports.contactUser = contactUser;
