import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react"

function App() {
  const [popularMovies, setPopularMovies ] = useState([]);
  const [movieTitle, setmovieTitle] = useState([]);
  const [togle, setTogle] =useState(0);
  const [searchKey, setsearchKey] = useState("");

  let moviesNaam=[];

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then(res => res.json())
      .then(data => setPopularMovies(data.results));  
    
}, [popularMovies]);


    function tooggle(){
      if(togle===0){
        
        abc();
        setTogle(1);
      }
      if(togle===1){
        def();
        setTogle(2);
      }
      if(togle===2){
        ghi();
        setTogle(0);
      }


    }

    function abc(){
      setmovieTitle(popularMovies.map((data)=>{
      return data.original_title
    }));
    // movieTitle.sort((a, b) => (a > b) ? 1 : -1);
    // console.log(movieTitle);
    
    console.log(togle);
    }

    function def(){
      movieTitle.sort((a, b) => (a > b) ? 1 : -1);
      console.log(togle);
    }

    function ghi(){
      movieTitle.sort((a,b)=>(a.length > b.length) ? 1 : -1);
      console.log(togle);
    }
    function searchKeyword(){
      popularMovies.find((element) => {
        if(element.original_title === searchKey){
          console.log(element);
        }
      });
      

    }
       

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1>Hello There!!</h1>

        <button onClick={tooggle}>Movies Name</button>
        <br></br>

        <div>
          {
          movieTitle.map((data)=>{
            return(
              <li key={data}>{data}</li>
            )
          })
          }
          
        </div>

        <input type='text' value={searchKey} onChange={(event)=>setsearchKey(event.target.value)} onKeyPress={searchKeyword} placeholder="Enter movie name"></input>


        <div>
          <h2>{searchKey.original_title}</h2>
        </div>
       



      </header>
    </div>
  );
}

export default App;
