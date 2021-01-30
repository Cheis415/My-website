import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSpring, animated as a } from 'react-spring'
import './AppCard.css'

function AppCard({imageSource, text, title}) {
  const [flipped, set] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, [])
  
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div data-aos="flip-left" className="Card-div" onClick={() => set(state => !state)}>
      <a.div className="c back" style={{opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.img className="back" style={{opacity: opacity.interpolate(o => 1 - o), transform }} src={imageSource}>{title}</a.img>
      <a.div className="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} >
        <b className="text">{text}</b></a.div>
    </div>
  )
}

export default AppCard;