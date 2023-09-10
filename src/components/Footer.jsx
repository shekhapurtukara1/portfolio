import React from 'react'
import "../componentStyling/footer.css";
import {FaHome} from "react-icons/fa";
import { MdMail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaLinkedin} from 'react-icons/fa'; // Import LinkedIn and Instagram icons
const Footer = () => {
  return (
    <div className='footer'>
        <div className="main-footer">Feel free to get in touch</div>
        <div className="details">
        <div className="left">
            <div className="location">
                <FaHome size={30} />
                <p>Hyderabad, Telangana, India</p>
            </div>
            <div className="social">
            <div className="mail">
                <MdMail size={30} />
                <Link to="mailto:shekhapurtukram789@gmail.com" className='social-link' >Email</Link>
            </div>
            <div className="linkedin">
                <FaLinkedin size={30}/>
                <Link to="https://www.linkedin.com/in/shekhapurtukaram" target="_blank" className='social-link'>Linkedin</Link>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer;