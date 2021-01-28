import React from "react";
import "./Wave.css";
import gmail from "./img/gmail (4).png";
import linkedin from "./img/linkedin-logo-png-clip-art.png";
import github from "./img/githubpic.png";
import resume from "./img/Resume.png";
import resumeCopy from "./img/Chad Heisler Resume (1).pdf"
function Wave() {


  return (
    <div className="wrap" >
    <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fff" fillOpacity="1" d="M0,128L60,128C120,128,240,128,360,144C480,160,600,192,720,202.7C840,213,960,203,1080,
        192C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,
        360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    <div className="our-partners">
    <p className="about-me-header"><b>A little about me,</b></p>
    <p className="about-me"><b>I am a Software Developer, thanks to the guidance of Code Tenderloin and Rithm School. Previously a carpenter and supervisor in construction, I'm applying years of time-sensitive problem solving and collaboration skills (and a healthy sense of humor) to coding.</b> </p>
    <h3>Find me here</h3>
    <div className="our-partners-inner">
        <a href="mailto:chadheisler5@gmail.com"><img className="gmail ic" src={gmail} alt="gmail" /></a>
        <a href="https://github.com/Cheis415?tab=repositories"><img className="github ic" src={github} alt="github" /></a>
        <a href="https://www.linkedin.com/in/chad-heisler/"><img className="linkedin ic" src={linkedin} alt="linkedin" /></a>
        <a href={resumeCopy}><img className="ic" src={resume} alt="resume" /></a>
    </div>
 </div>
 </div>
  )
}




export default Wave;