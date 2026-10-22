import './Contacts.css';

import LiliesImg from '../assets/Flower.svg';

export default function Contacts (){
    return (
        <div className='Contacts' id='Contacts'>
            <section id='Lilies_img'>
                <img src={LiliesImg} alt="lilies flowers image" />
            </section>
            <section id='Contacts'>
                <h1>Contact Me</h1>
                <h3>Until next time.</h3>
                <p>Made it this far? I’d love to hear from you.</p>
                <p>I’m currently open to frontend internship opportunities, collaborations, and conversations about all things web.</p>
                <h3>Let’s start with a hello.</h3>
                <p>✉️ Email: <a href="mailto:zahraammalek2006@icloud.com">zahraammalek2006@icloud.com</a></p>
                <p>↗ LinkedIn: <a href="https://www.linkedin.com/in/zahraa-malik-165016365/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOAdgV%2BQTRXyEeqC6UGDJNg%3D%3D" target="_blank">Zahraa_Malik_LinkedIn</a></p>
                <p>↗ GitHub: <a href="https://github.com/zahraamalik06" target="_blank">https://github.com/zahraamalik06</a></p>
            </section>
        </div>
    );    
}