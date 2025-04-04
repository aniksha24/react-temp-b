import React, { useEffect } from 'react'
export default function App21() {
    useEffect(() => {
        console.log("component Mounted");
        return ()=>{
            console.log("component Unmounted");
        };
    }, 
    []);
   const handleClick= ()=>{
    setCount(count+1)
    console.log("component uploaded/reloaded")
   }
    return (
        <div>
            <h2>This is App21</h2>
            <button onClick={handleClick  }>Click</button>
        </div>

    )
}
