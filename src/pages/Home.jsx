import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contacts from '../components/Contacts';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contacts />
    </>
  );
}