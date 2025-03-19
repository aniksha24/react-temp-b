import React, { useState } from 'react'
//import {useState} from "react";
export default function App4() {
     const [user,setUser]=useState({});
        const [msg,setMsg]=useState();
        const handleSubmit=()=>{
            if(email==="a@gmail.com" && password==="123"){
                setMsg("Welcome Ani")
            }
            else{
                setMsg("Access Denied")
            }
        };
        return (
            <div>
                <h1>Login Form</h1>
                {(msg)}
                <p><input type="email" onChange={(event)}></input></p>
                
                <button onClick={handleSubmit}>Log in</button>
            </div>
        )
}
