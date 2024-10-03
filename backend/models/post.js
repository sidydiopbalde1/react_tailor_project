const mongoose = require('mongoose');

// Définir le schéma de "Post"
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,  // Champ obligatoire
    trim: true,  // Supprime les espaces superflus
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,  // La date actuelle par défaut
  }
});

// Créer un modèle basé sur le schéma
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
