import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#hero" className="logo">Zahraa Malik</a>
      <nav>
        <a href="#Hero">Hero</a>
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Skills">Skills</a>
        <a href="#Contacts">Contact</a>
      </nav>
    </header>
  );
}