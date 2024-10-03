import axios from 'axios';

// Définir l'URL de votre serveur backend
const API_URL = 'http://localhost:5000/api/posts';

// Fonction pour récupérer tous les posts
export const getPosts = async () => {
    const response = await axios.get(API_URL);
    console.log(response)
  try {
    return response.data;  // Retourne les données des posts
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

// Fonction pour créer un nouveau post
export const createPost = async (postData) => {
  try {
    const response = await axios.post(API_URL, postData);
    return response.data;  // Retourne le post créé
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

// Fonction pour récupérer un post par ID
export const getPostById = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/${postId}`);
    return response.data;  // Retourne les données du post
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    throw error;
  }
};

// Fonction pour mettre à jour un post par ID
export const updatePost = async (postId, postData) => {
  try {
    const response = await axios.put(`${API_URL}/${postId}`, postData);
    return response.data;  // Retourne les données du post mis à jour
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
};

// Fonction pour supprimer un post par ID
export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`${API_URL}/${postId}`);
    return response.data;  // Retourne le message de suppression
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};










  