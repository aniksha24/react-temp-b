// export default function App2(props){ //to get more detail we use props
//     return(
//         <div style={{backgroundColor:'pink'}}>{props.name} {props.age}</div> //inline styling bg-color for div

//     )
// }
import React from 'react';
import {useState} from 'react';
export default function App2() {
    const [count,setCount]=useState(0);
    const increment =()=>{
            setCount(count+1)// while in js we use count=count+1-----here we call setCount() function 
    }
    const decrement =()=>{
        setCount(count-1)
    }
  return (

    <div>
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button> 
    </div>
  )
}
