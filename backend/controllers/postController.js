const mongoose = require('mongoose');  
const Post = require('../models/post');


const isValidObjectId = mongoose.Types.ObjectId.isValid;
const { addPost, getPosts } = require('../models/postModel');

// Fonction pour ajouter un nouveau post via une requête POST
const handleAddPost = async (req, res) => {
  const { title, content, photo,user_id } = req.body;
  try {
    const post = await addPost(title, content, photo,user_id);  // Utiliser la fonction du modèle
    res.status(201).json(post);  // Envoyer une réponse avec le post ajouté
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de l\'ajout du post' });
  }
};

// Fonction pour récupérer tous les posts via une requête GET
const handleGetPosts = async (req, res) => {
  try {
    const posts = await getPosts();  // Utiliser la fonction du modèle
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des posts' });
  }
};


//MONGODB 

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
};

// Fonction pour créer un nouveau post
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error });
  }
};

// Fonction pour récupérer un post par son ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post', error });
  }
};

// Fonction pour mettre à jour un post
exports.updatePost = async (req, res) => {
    try {
      const postId = req.params.id;
  
      if (!isValidObjectId(postId)) {
        return res.status(400).json({ message: 'Invalid post ID' });
      }
  
      const { title, content } = req.body;
  
      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { title, content },
        { new: true, runValidators: true }
      );
  
      if (!updatedPost) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      res.json(updatedPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating post', error });
    }
  };

// Fonction pour supprimer un post
exports.deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error });
  }
};



module.exports = { handleAddPost, handleGetPosts };
