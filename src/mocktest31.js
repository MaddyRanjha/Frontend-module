import React, { useState, useEffect } from 'react';


function Mocktest31() {
  let i = 0;
  const [tex, setTex]=useState("")
  let demo="";
  let txt = 'Lorem ipsum dummy text blabla.';
  const [speed, setSpeed]=useState(50);
  // let speed = 50;

  function typeWriter(){
    if (i < txt.length) {
      // document.getElementById("demo").innerHTML += txt.charAt(i);
      demo=demo+txt.charAt(i);
      setTex(demo)
      console.log(tex+txt.charAt(i));
      i++;
      
      setTimeout(typeWriter, speed);
    }
  }
 
  
  return (
    <div>
      <h1>Typewriter</h1>

      <button onClick={typeWriter}>Click me</button>
      <input onChange={(e)=>setSpeed(e.target.value)}></input>

      <p id="demo">{tex}</p>


    </div>
  );
}

export default Mocktest31