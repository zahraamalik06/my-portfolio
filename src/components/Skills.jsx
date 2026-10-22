import './Skills.css';

import GitImg from '../assets/Git.svg';
import NpmImg from '../assets/NPM.svg';
import HtmlImg from '../assets/HTML5.svg';
import CssImg from '../assets/CSS.svg';
import JavascriptImg from '../assets/JavaScript.svg';
import ReactImg from '../assets/React.svg';
import ResponsiveDesignImg from '../assets/Responsive_Design.svg';
import FigmaImg from '../assets/Figma.svg';
import PhotoshopImg from '../assets/PhotoShop.svg';
import VScodeImg from '../assets/VSCode.svg';
import GithubImg from '../assets/GitHub.svg';


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