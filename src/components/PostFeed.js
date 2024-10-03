// src/components/Post.js
import React from 'react';

function Post({ user, imageUrl, caption, likes }) {
  return (
    <div className="post">
      <div className="post-header">
        <img src="../logo512.png" alt="photo" className="avatar" />
        <span>Sidy Diop Balde</span>
      </div>
      <img src="../uifaces-popular-image (12).jpg" alt="sidy" className="post-image" />
      <div className="post-info">
        {/* <p>{caption}</p>
        <span>{likes} likes</span> */}
      </div>
    </div>
  );
}

export default Post;
