import './Projects.css';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
const getPreview = (id) => projects.find(p => p.id === id)?.preview;
import folderOne from '../assets/Folder1.png';
import folderTwo from '../assets/Folder2.png';
import folderThree from '../assets/Folder3.png';
import folderFour from '../assets/Folder4.png';

export default function Projects(){
  return(
    <div className='Projects' id='Projects'>
      <h1>Projects</h1>

      <section id='multistep-form'>
        <Link to="/project/multistep-form">
          <img src={folderOne} alt="project one" />
          <p>MultiStep form</p>
          <img className="preview" src={getPreview('multistep-form')} alt="multistep form preview" />
        </Link>
      </section>

      <section id='lightsoul'>
        <Link to="/project/lightsoul">
          <img src={folderTwo} alt="project two" />
          <p>Light Soul</p>
          <img className="preview" src={getPreview('lightsoul')} alt="lightsoul project preview" />
        </Link>
      </section>

      <section id='bytebite'>
        <Link to="/project/bytebite">
          <img src={folderThree} alt="project three" />
          <p>ByteBite</p>
          <img className="preview" src={getPreview('bytebite')} alt="ByteBite project preview" />
        </Link>
      </section>

      <section id='portfolio_'>
        <Link to="/project/portfolio_">
          <img src={folderFour} alt="project four" />
          <p>Portfolio</p>
          <img className="preview" src={getPreview('portfolio_')} alt="portfolio project preview" />
        </Link>
      </section>
      <p id='note'>Hover over the folder for a quick preview!</p>
    </div>
  );
}