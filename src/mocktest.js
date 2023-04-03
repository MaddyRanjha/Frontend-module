import React,{useState} from 'react'

function Mocktest() {
    const [str, setStr]= useState("");
    const [currInput, setCurrInput]=useState([]);
    function append(){
        setCurrInput(currInput =>[...currInput, str]);
        setStr("");
    }
    function undo(){
      currInput.pop();
      setCurrInput(currInput =>[...currInput]);
      setStr("");
    }

  return (
    <div>
        <input type='text' onChange={(event)=>setStr(event.target.value)} placeholder="Enter something..."></input>
        <button onClick={append}>Append</button>
        <button onClick={undo}>Undo</button>
        <div>{currInput.map((ele)=>{
          return ele + " "

        })}</div>
    </div>
  )
}

export default Mocktest