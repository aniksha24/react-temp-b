import React from 'react'
import { useState, useRef } from 'react'
export default function App11() {
  const runRef = useRef();
  const [color, setColor] = useState();
  const op = () => {
    runRef.current.style.color = color;
  }
  return (
    <div>
      <p>
        <input type="text" onChange={(e) => setColor(e.target.value)} placeholder='enter color'></input>
        <button onClick={op}>Submit</button>
      </p>
      <p>
        <h4 ref={runRef}>hello world</h4>
      </p>
    </div>
  )
}
