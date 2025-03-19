import React from 'react'
import { useState } from 'react';
export default function App3() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [msg,setMsg]=useState();
    const handleSubmit=()=>{
        if(email==="a@gmail.com" && password==="123"){
            setMsg("Welcome Ani")
        }
        else{
            setMsg("Access Denied")
        }
    };
    // const email = () => {
    //     setEmail()
    // }
    // const password = () => {
    //     setPassword()
    // }
    return (
        <div>
            <h1>Login Form</h1>
            {(msg)}
            <p><input type="email" name='email' placeholder="enter your email" onChange={(event)=>setEmail(event.target.value)}></input></p>
            <p><input type="password" name='password' placeholder="enter your password" onChange={(event)=>setPassword(event.target.value)}></input></p>
            <button onClick={handleSubmit}>Log in</button>
        </div>
    )
}