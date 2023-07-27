import express from 'express';
import bodyParser from 'body-parser';
import contactRoutes from './routes/contactRoute';
import cors from 'cors';

const app = express();
app.use(cors());

const port = 3001

// Middleware pour parser les données de requête au format JSON
app.use(bodyParser.json());

// Import des routes
app.use('/contact', contactRoutes);

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});
