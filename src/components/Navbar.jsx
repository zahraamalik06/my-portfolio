import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/#hero" className="logo">Zahraa Malik</Link>
      <nav>
        <Link to="/#Hero">Hero</Link>
        <Link to="/#About">About</Link>
        <Link to="/#Projects">Projects</Link>
        <Link to="/#Skills">Skills</Link>
        <Link to="/#Contacts">Contact</Link>
      </nav>
    </header>
  );
}