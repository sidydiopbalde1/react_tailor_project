// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
// import PostFeed from '../components/PostFeed';
import Navbar from './Navbar';
import PostList from '../components/PostList';
function Home() {
  return (
    <div>
      <Header />
      <Navbar />    
      {/* <PostFeed /> */}
      <PostList />
    </div>
  );
}

// import React from 'react';
// function Home() {
//     return (
//       <div>
//         <h1>Welcome to the Home page!</h1>
//       </div>
//     );
//   }
  export default Home;