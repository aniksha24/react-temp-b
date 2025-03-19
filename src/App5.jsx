import React from 'react';
import "./App5.css";
import { useState } from 'react';
export default function App5() {
    const [count,setCount]=useState(0);
    const increment =()=>{
            setCount(count+1)// while in js we use count=count+1-----here we call setCount() function 
    };
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Click</button>
    </div>
  );
}
