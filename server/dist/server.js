"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const contactRoute_1 = __importDefault(require("./routes/contactRoute"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = 3001;
// Middleware pour parser les données de requête au format JSON
app.use(body_parser_1.default.json());
// Import des routes
app.use('/contact', contactRoute_1.default);
// Démarrage du serveur
app.listen(port, () => {
    console.log(`Le serveur est en écoute sur le port ${port}`);
});
