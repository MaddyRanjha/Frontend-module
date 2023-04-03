import React,{useState, useEffect} from 'react'

function ModuleMock() {
  const [fetchedData, setFetchedData]= useState([]);
  const [searchedCountry, setSearchedCountry]= useState("");
  const [dataFound, setDataFound] =useState([]);
  const [check, setCheck]= useState(false);
  
  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/countries")
    .then(res=>res.json())
    .then(data =>setFetchedData(data));
  
  },[]);
  // console.log(fetchedData)

  function searchCountry(){
    setCheck(false);
    fetchedData.find((element)=>{
      if(element.country===searchedCountry){
        setDataFound(element);
        setCheck(true);
      }
    })
  }

  return (
    <div>
      <input type='text' value={searchedCountry} onChange={(e)=>setSearchedCountry(e.target.value)}>
      </input>
      <button onClick={searchCountry}>Search</button>
      <div>
        {
          check ? <div>
            <p>Country: {dataFound.country}</p>
            <p>Cases: {dataFound.cases}</p>
          </div> : <h3>{searchCountry} Not Found</h3>
        }
      </div>
    </div>
  )
}

export default ModuleMock