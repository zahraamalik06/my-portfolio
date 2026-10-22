import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectPage.css';
import ProjectPageNavbar from './ProjectPageNavbar';
import Contacts from '../components/Contacts';
import { Link } from 'react-router-dom';

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  return (
    <div className="ProjectPage">
    <section id='Navbar_pp'>
        <ProjectPageNavbar />
    </section>
    <section id='ProjectPageHero'>
        <img src={project.image} alt="Project image mockup" />
    </section>

    <section id='ProjectPageInfo'>
      <h1>{project.title}</h1>
      <p><span className='title'>Description:</span> {project.description}</p>
      <p><span className='title'>Tools:</span> {project.tools}</p>
      <p><span className='title'>Live Demo:</span> <a href={project.liveUrl} className='Links'>{project.liveUrl}</a></p>
      <p><span className='title'>GitHub Reposetory:</span> <a href={project.githubUrl} className='Links'>{project.githubUrl}</a></p>
    </section>
      
    <section id='Contacts_pp'>
        <Contacts />
    </section>
    </div>
  );
}