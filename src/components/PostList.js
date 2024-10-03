import React, { useState, useEffect } from 'react';
import { getPosts, createPost } from '../api/api';  // Importer les fonctions de l'API

const PostList = () => {
  const [posts, setPosts] = useState([]);

  // Récupérer les posts au chargement du composant
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();  // Appeler la fonction API
        setPosts(data);
        console.log('Fetched posts:', data);  // Afficher les données des posts
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleCreatePost = async () => {
    const newPost = { title: 'New Post', content: 'Content of the new post' };
    try {
      const createdPost = await createPost(newPost);  // Appeler la fonction API pour créer un post
      setPosts([...posts, createdPost]);  // Ajouter le nouveau post à la liste
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={handleCreatePost}>Create New Post</button>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
