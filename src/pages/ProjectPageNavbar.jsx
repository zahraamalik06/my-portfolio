
import './ProjectPageNavbar.css';
import './ProjectPage.jsx'
import { Link } from 'react-router-dom';

export default function ProjectPageNavbar() {
  return (
    <header className="ProjectPageNavbar">
      <Link to="/#projects" className="BackToHomePage">&lt;-- Back</Link>
      <nav>
        <Link to="/#ProjectPageHero">Hero</Link>
        <Link to="#/ProjectPageInfo">About Project</Link>
        <Link to="/#Contacts_pp">Contact</Link>
      </nav>
    </header>
  );
}