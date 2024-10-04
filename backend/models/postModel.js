const { pool } = require('../database/postgres'); // Importer la connexion PostgreSQL

// Fonction pour ajouter un nouveau post
const addPost = async (title, content, photoUrl,user_id) => {
  try {
    const query = 'INSERT INTO posts (title, content, photo) VALUES ($1, $2, $3) RETURNING *';
    const values = [title, content, photoUrl,user_id];
    
    const result = await pool.query(query, values);
    return result.rows[0];  
  } catch (err) {
    console.error('Erreur lors de l\'ajout du post:', err);
    throw err;
  }
};

// Fonction pour récupérer tous les posts
const getPosts = async () => {
  try {
    const query = 'SELECT * FROM posts';
    const result = await pool.query(query);
    return result.rows;  // Retourner tous les posts
  } catch (err) {
    console.error('Erreur lors de la récupération des posts:', err);
    throw err;
  }
};

module.exports = { addPost, getPosts };
