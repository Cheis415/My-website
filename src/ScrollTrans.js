import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./scrollTrans.css";
import micro from "./img/micro.png";
import clever from "./img/clever.png";
// import clash from "./img/clash.png";
import speaker from "./img/speaker-box.png";
import arrow from "./img/pngegg.png"
import AppCard from "./AppCard";





function ScrollTrans() {
  let microTitle = "Micro Blog";
  let microText = `MicroBlog was built with React using Redux for state management. This is a purely 
  front-end App. A user can post and delete a blog post, as well as like other blogs. I also used 
  history.push to save blog posts to local storage and to leave likes. 
  I enjoyed the challenge of writing a front-end only app, but having it feel fully featured. Click on the title in 
  top right corner to see a demo! `;
  
  let cleverTitle = "Clever Counsel";
  let cleverCouncil = `Clever Counsel is a  production app that I worked on as an intern. It uses a React 
  front-end, a Flask back-end, and a MySQL database. This app automates a lot of the
  process of filing wage disputes for lawyers and their clients, saving them time and money. I learned what it takes
  to work for a company day-to-day as a developer, merging several pull requests, collaborating with a diverse team,
  and working in a Git workflow. I particulary loved working on this project, using  my skills to be of service
  to people in need. The website is still under construction, so I will have a link as soon as it's live. In the mean time 
  click on the title in the top right corner to see their Linkedin.`;
  
  // let clashTitle = "Comic Clash"
  // let clashText = `Ah, my inner nerd. Working on Comic Clash made him thrive. Comic Clash is a website made with a React front-end and
  // an Express server in the back-end making calls to an external API. On this site a user can create
  // a post with two super heroes and a reason as to why one would win over the other, sparking 
  // endless debates with friends. This is still a work in progress, and we have a lot of functionality that we would like to add. Stay tuned!`;

  let speakerTitle = "Speaker Box";
  let speakerText = `Not your usual twitter clone. This is a pure python app, built with jinja templates. This is fully functional with the ability to
  like or dislike a post. We also put in a spotify widget so a user can bump their speakers while browsing. A postgreSQL database handles all the data
  storage. Click on the title in top right corner to see a demo!`
   
  useEffect(() => {
    AOS.init({ duration: 2000, offset: 250,  easing: 'ease-in-quart',once: true,
      });
  }, [])
  return (
    <div className="mainDiv">
        <div className="grids">
          <div aria-label="Here are some projects. Click to learn more" data-aos-once="true" data-aos="fade-right" className="arrow" ><h1 className="top-h1">Here are some projects</h1>
                                      <h1  className="bot-h1"> Click to learn more</h1><img src={arrow} alt="arrow"></img></div>
          <div data-aos-once="true" data-aos="flip-left" className="boxes"><AppCard imageSource={micro} text={microText} /><a target='_blank' className="title" href="https://awesome-visvesvaraya-5b1e74.netlify.app">{microTitle}</a></div>
          <div data-aos-once="true" data-aos="flip-left" className="boxes"><AppCard imageSource={clever} text={cleverCouncil} /><a target='_blank' className="title" href="https://www.linkedin.com/company/clevercounsel-llc/">{cleverTitle}</a></div>
          <div data-aos-once="true" data-aos="flip-left" className="boxes"><AppCard imageSource={speaker} text={speakerText} /><a target='_blank' className="title" href="https://united-twitter-clone.herokuapp.com/">{speakerTitle}</a></div>
          {/* <div data-aos-once="true" data-aos="flip-left" className="boxes"><AppCard imageSource={clash} text={clashText} /><h1 className="title">{clashTitle}</h1></div> */}
        </div>
      </div>
  )
}

export default ScrollTrans;