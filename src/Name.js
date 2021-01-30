import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './Name.css'

function Name() {
  const ref = useRef([])
  const [items, setItems] = useState([])
  const transitions = useTransition(items, null, {
    from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#8fa5b6' },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80, margin: "10px" },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#28b4d7', margin: "10px" },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    setItems([])
    ref.current.push(setTimeout(() => setItems(["I'm a" , "front-end", 'Developer']), 2000))
    ref.current.push(setTimeout(() => setItems(["I'm a", 'Developer']), 5000))
    ref.current.push(setTimeout(() => setItems(["I'm a", "front-end", 'Developer']), 8000))
  }, [])

  useEffect(() => void reset(), [reset])

  return (
    <div className="container">
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => {
        return (
        <animated.div className="transitions-item" key={key} style={rest} >
          <animated.div style={{  height: innerHeight }}>{item}</animated.div>
        </animated.div>
      )})}
    </div>
  )
}
export default Name;