import './Skills.css';

import GitImg from '../assets/Git.png';
import NpmImg from '../assets/NPM.png';
import HtmlImg from '../assets/HTML5.png';
import CssImg from '../assets/CSS.png';
import JavascriptImg from '../assets/JavaScript.png';
import ReactImg from '../assets/React.png';
import ResponsiveDesignImg from '../assets/Responsive_Design.png';
import FigmaImg from '../assets/Figma.png';
import PhotoshopImg from '../assets/PhotoShop.png';
import VScodeImg from '../assets/VSCode.png';
import GithubImg from '../assets/GitHub.png';


export default function Skills(){
    return(
        <div className='Skills' id='Skills'>
            <h1>SKills and Tools</h1>
            <section>
                <div className='skills_apps'>
                    <img src={GitImg} alt="git logo image" />
                    <img src={NpmImg} alt="NPM logo image" />
                    <img src={HtmlImg} alt="HTML 5 logo image" />
                    <img src={CssImg} alt="CSS logo image" />
                    <img src={JavascriptImg} alt="java script logo image" />
                    <img src={ReactImg} alt="React logo image" />
                    <img src={ResponsiveDesignImg} alt="Responsive design text image" id='responsivedesign'/>
                </div>
                <div className='tools_apps'>
                    <img src={FigmaImg} alt="Figma logo image" />
                    <img src={PhotoshopImg} alt="Photoshop logo image" />
                    <img src={VScodeImg} alt="VS Code logo image" />
                    <img src={GithubImg} alt="GitHub logo image" />
                </div>
            </section>
        </div>
    );
}