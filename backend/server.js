

const express = require('express');
const postRoutes = require('./routes/postRoutes');
const { connectToPostgres } = require('../database/postgres ');

// Créer l'application Express
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Routes pour les posts
app.use('/api', postRoutes);

// Démarrer la connexion PostgreSQL
connectToPostgres();

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur le port ${PORT}`);
});
