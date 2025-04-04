import React from 'react'
import { useState,useRef,useEffect } from 'react'
export default function App12() {
    const [price,setPrice]=useState(0);//state variable
    const prevPrice=useRef(0);//ref variable
    const priceRef=useRef();
useEffect(()=>{
//variable.current is useRef hook function used to chage the value of current and previous ones
    if(prevPrice.current>price){
        priceRef.current.style.color="red";
    }
    else{
        priceRef.current.style.color="green";
    }
    prevPrice.current=price;
},[price])
// useEffect(()=>{prevPrice.current=price},[price])
// const handleSubmit=()=>{

// }
  return (
    <div>
        <h3>This is App12</h3>
        <p>
        <input type="number" onChange={(e)=>setPrice(e.target.value)}></input>
        {/* <button onClick={handleSubmit}>Submit</button> */}
        </p> 
        {/* <button onClick={handleSubmit}>Submit</button> */}
        Previous Price:{prevPrice.current}
       <h4 ref={priceRef}>Current Price:{price}</h4>
    </div>
  )
}
