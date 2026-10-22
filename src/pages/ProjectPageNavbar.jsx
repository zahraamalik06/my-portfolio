
import './ProjectPageNavbar.css';
import { Link } from 'react-router-dom';

export default function ProjectPageNavbar() {
  return (
    <header className="ProjectPageNavbar">
      <a href='/' className="BackToHomePage">&lt;-- Back</a>
      <nav>
        <a href="#ProjectPageHero">Hero</a>
        <a href="#ProjectPageInfo">About Project</a>
        <a href="#Contacts">Contact</a>
      </nav>
    </header>
  );
}