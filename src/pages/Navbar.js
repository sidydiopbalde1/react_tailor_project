// src/components/Navbar.js
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/search">Recherche</Link></li>
        <li><Link to="/reels">Reels</Link></li>
        <li><Link to="/messages">Messages</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/settings">Paramètres</Link></li>
        <li><Link to="/post">Ajouter une publication</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
