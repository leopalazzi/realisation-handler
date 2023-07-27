import express from 'express';
import { contactUser } from '../controllers/contactController';

const router = express.Router();

// Route pour créer un nouvel utilisateur
router.post('/', contactUser);

export default router;
