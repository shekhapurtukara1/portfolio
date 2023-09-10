import React from 'react'
import "../componentStyling/Home.css"
import profileimg from "../images/portfolio-img.png";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="home-section">
    <div className="content">
    <h1>Welcome, I'm Tukaram</h1>
    <p class="intro">Final Year B.Tech Graduate | <span className='name'>Software Engineer </span></p>
    <p>I am passionate about creating user-friendly and responsive websites. As a tech enthusiast, I've honed my skills in <span className='name'>HTML</span>, <span className='name'>CSS</span>, <span className='name'>Javascript</span>, <span className='name'>React</span>, and more. 
    With a strong foundation in programming languages <span className='name'>Java</span> and <span className='name'>C</span>, I bring a versatile approach to problem-solving.</p>
    <p className='exploring'>Exploring the intersection of technology and creativity drives me, and I'm excited to embark on new challenges and opportunities that come my way.</p>
    <Link to="/projects" className='project-link'>Projects</Link>
    </div>
    <img className="profile-image" src={profileimg} alt="Your Name"/>
  </div>
  )
}

export default Home