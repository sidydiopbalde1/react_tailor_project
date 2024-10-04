const { Pool } = require('pg');

// Configuration de la connexion PostgreSQL
const pool = new Pool({
  user: 'sidydiopbalde',
  host: 'localhost', // ou l'adresse de votre serveur PostgreSQL
  database: 'react_tailor_db',
  password: 'Toubakhayra',
  port: 5432, 
});

// Fonction pour tester la connexion à la base de données
const connectToPostgres = async () => {
  try {
    await pool.connect();
    console.log('PostgreSQL connecté avec succès');
  } catch (err) {
    console.error('Erreur de connexion à PostgreSQL:', err);
  }
};

// Exporter le pool pour l'utiliser dans d'autres fichiers
module.exports = { pool, connectToPostgres };
