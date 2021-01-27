import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./scrollTrans.css";
import micro from "./img/Micro_blog.png";
import clever from "./img/clever.png"
import AppCard from "./AppCard";





function ScrollTrans() {
  let microText = `This App was built with React using Redux for state management. This is a pure 
  front end App. A user can post/delete a blog, as well as like other blogs I used 
  history.push to save blog posts and to leave likes as well. 
  This was a lot of fun to build! Ask me about it!`;
  
  let cleverCouncil = `This a production app that I worked on. It uses a react front
  end and flask on the back end, using a MySQL database. This app automates a lot of the
  process of filing wage disputes, saving people a lot of money. I learned a lot 
  working on this, feel free to reach out with any questions!`;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  return (
    <div className="mainDiv">
        <div className="grids">
          <div data-aos="fade-right" ><h1 className="top-h1">Here are some projects!</h1>
                                      <h1 className="bot-h1"> Click to learn more!</h1></div>
          <div data-aos="fade-down" className="boxes"><AppCard imageSource={micro} text={microText}/></div>
          <div data-aos="fade-up" className="boxes"><AppCard imageSource={clever} text={cleverCouncil}/></div>
          <div data-aos="fade-left" className="boxes">4</div>
          <div data-aos="fade-right" className="boxes">5</div>
        </div>
      </div>
  )
}

export default ScrollTrans;