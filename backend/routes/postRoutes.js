const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Définir les routes pour les posts
router.get('/posts', postController.getAllPosts);
router.post('/posts', postController.createPost);
router.get('/posts/:id', postController.getPostById);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;
