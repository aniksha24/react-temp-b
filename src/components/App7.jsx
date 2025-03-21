import React from 'react'
import "./App7.css";
import { useState } from 'react';
export default function App7() {
    const[items,setItems]=useState([]);
    const[text,setText]=useState({});
    const handleSubmit = () => {
      setItems([...items, text]);
    };
  return (
    <div className="App-Row">
      <div>
        <h3>Billing Form</h3>
        <p><input type="text" placeholder='Product name' onChange={(event) => setText({...text,name:event.target.value})}></input></p>
        <p><input type="number" placeholder='Price' onChange={(event) => setText({...text,price:event.target.value})}></input></p>
        <p><input type="number" placeholder='Quantity' onChange={(event) => setText({...text,quantity:event.target.value})}></input></p>
        <p style={{textAlign:"center"}} ><button onClick={handleSubmit} >Submit</button></p>
      </div>
      <div>
        <h3>Items</h3>
        <table border="1">  {items && items.map((value, index) => (
          <tr>
            <td>{value.name}</td>
            <td>{value.price}</td>
            <td>{value.quantity}</td>
            <td>{value.price*value.quantity}</td>
          </tr>

        ))}</table>
      </div>
    </div>
  )
}
