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
       I am a passionate and dedicated Salesforce Developer with a profound love for technology. <br/>
       I enjoy creating <b>innovative</b> solutions that can drive positive change in the world.<br/>
       I believe the intersection of creativity, problem-solving, and teamwork is where the magic happens.<br/>
       My journey has equipped me with a solid foundation in <b style={{"color":"yellow"}}>Frontend development, Salesforce, and Java.</b><br/>
       I'm always eager to learn and adapt to new challenges in the rapidly evolving tech landscape.
       If you have a good opportunity that matches my skills and experience,<br/> feel free to contact me.
       </p>
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
    <div class="skill">
      <div class="skill-name">Apex Programming</div>
    </div>
    <div class="skill">
      <div class="skill-name">Salesforce CPQ</div>
    </div>
    <div class="skill">
      <div class="skill-name">LWC</div>
    </div>
    <div class="skill">
      <div class="skill-name">SOQL</div>
    </div>
    <div class="skill">
      <div class="skill-name">Salesforce Admin</div>
    </div>
    <div class="skill">
      <div class="skill-name">JavaScript</div>
    </div>
  </div>
  </div>
    </div>
    </div>
  )
}

export default About
