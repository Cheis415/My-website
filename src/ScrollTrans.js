import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./scrollTrans.css";
import micro from "./img/micro.png";
import clever from "./img/clever.png"
import clash from "./img/clash.png"
import AppCard from "./AppCard";





function ScrollTrans() {
  let microText = `MicroBlog was built with React using Redux for state management. This is a purely 
  front-end App. A user can post and delete a blog post, as well as like other blogs. I also used 
  history.push to save blog posts to local storage and to leave likes. 
  I enjoyed the challenge of writing a front-end only app, but having it feel fully featured. `;
  
  let cleverCouncil = `Clever Council is a  production app that I worked on as an intern. It uses a React 
  front-end, a Flask back-end, and a MySQL database. This app automates a lot of the
  process of filing wage disputes for lawyers and their clients, saving them time and money. I learned what it takes
  to work for a company day-to-day as a developer, merging several pull requests, collaborating with a diverse team,
  and working in a Git workflow. I particulary loved working on this project, using  my skills to be of service
  to people in need.`;

  let clashText = `Ah, my inner nerd. Working on Comic Clash made him thrive. Comic Clash is a website made with a React front-end and
  an Express server in the back-end making calls to an external API. On this site a user can create
  a post with two super heroes and a reason as to why one would win over the other, sparking 
  endless debates with friends. This is still a work in progress, and we have a lot of functionality that we would like to add. Stay tuned!`;
   
  useEffect(() => {
    AOS.init({ duration: 2000, offset: 100,  easing: 'ease-in-out-sine',
    delay: 100,  });
  }, [])
  return (
    <div className="mainDiv">
        <div className="grids">
          <div data-aos="fade-right" ><h1 className="top-h1">Here are some projects!</h1>
                                      <h1 className="bot-h1"> Click to learn more!</h1></div>
          <div data-aos="fade-left" className="boxes"><AppCard imageSource={micro} text={microText}/></div>
          <div data-aos="fade-right" className="boxes"><AppCard imageSource={clever} text={cleverCouncil}/></div>
          <div data-aos="fade-left" className="boxes"><AppCard imageSource={clash} text={clashText}/></div>
        </div>
      </div>
  )
}

export default ScrollTrans;