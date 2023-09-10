import React from 'react'
import "../componentStyling/About.css"
const About = () => {
  return (
    <div class="about-container"> 
     <h1 className='main-heading'>ABOUT ME</h1>
     <h2>Here you will find more information about me, what I do, and my current skills mostly in terms <br/>of programming and technology</h2>
     <div className="about">
    <div className="left">
       <div className="about-content"> <p style={{"padding":'10px'}}>
       A passionate and dedicated Final-year B.Tech graduate majoring <br/> in Information Techology.
       I have a profound love for technology and <br/> a strong desire to create innovative solutions 
       that can drive positive change in the world.<br/>
        I believe that the intersection of creativity, problem-solving, and <br/>teamwork is where the magic happens. <br/>
        My journey has equipped me with a solid foundation in Frontend develoment, Java, MySQL.<br/>
         I'm always eager to learn and adapt to new challenges in the rapidly evolving tech landscape.
       </p>
       <p style={{"padding":'10px'}}>I'm open to Job opportunities where I can contribute, learn and grow. If <br/> you have a good opportunity that matches my skills and experience then<br/> don't hesitate to contact me.</p>
       </div>
       </div>
       <div className="right">
       <h1>My Skills</h1>
       <div class="skills-section">
    <div class="skill">
      <div class="skill-name">HTML</div>
    </div>
    <div class="skill">
      <div class="skill-name">CSS</div>
    </div>
    <div class="skill">
      <div class="skill-name">React</div>
    </div>
    <div class="skill">
      <div class="skill-name">Node.js</div>
    </div>
    <div class="skill">
      <div class="skill-name">Express.js</div>
    </div>
    <div class="skill">
      <div class="skill-name">MySQL</div>
    </div>
    <div class="skill">
      <div class="skill-name">SQL</div>
    </div>
    <div class="skill">
      <div class="skill-name">Java</div>
    </div>
    <div class="skill">
      <div class="skill-name">C Language</div>
    </div>
    <div class="skill">
      <div class="skill-name">Data Structures & Algorithms</div>
    </div>
  </div>
  </div>
    </div>
    </div>
  )
}

export default About