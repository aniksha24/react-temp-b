
import React from "react";
import { useState, useEffect } from "react";
export default function App8() {
  const [v1,setV1] = useState(0);
  const [v2,setV2] = useState(0);
  const [total,setTotal] = useState(0);
useEffect(() => {setTotal(Number(v1)+Number(v2));},[v1]);//() -> function {} -> it will change according to the variables that we have given in-[]  [] -> to store variables
useEffect(() => {setTotal(Number(v1)*Number(v2));},[v2]);
  return (
    <div>
      <p><input type="number" onChange={(e) => setV1(e.target.value)} placeholder="Enter Amount"></input></p>
      <p><input type="number" onChange={(e) => setV2(e.target.value)} placeholder="Enter Amount"></input></p>
      <p>Total:{total}</p>
    </div>
  );
}
