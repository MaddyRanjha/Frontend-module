import React,{useEffect, useState} from 'react'

function ModuleTest() {
    const [fetchedData, setFetchedData] =useState([]);
    const [searchedCountry, setSearchedCountry] =useState("");
    const [dataFound, setDataFound] =useState([]);
    const [check, setCheck]=useState(false);

    useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/countries")
    .then(res => res.json())
    .then(data => setFetchedData(data));
    },[]);

    console.log(fetchedData);

    function searchCountry(){
        setCheck(false);
        fetchedData.find((element)=>{
            if(element.country ===searchedCountry){
                setDataFound(element);
                setCheck(true);
            }
            
        });
        console.log(dataFound);

    }

  return (
    <div>

        <input type='text' value={searchedCountry} onChange={event => setSearchedCountry(event.target.value)}></input>
        <button onClick={searchCountry}>Search</button>

        <div>
            {check ? <div>
            <p>Country: {dataFound.country}</p>
            <p>Cases: {dataFound.cases}</p>
            <p>Deaths: {dataFound.deaths}</p>
            <p>Recovered: {dataFound.recovered}</p>
            <p>Today's cases: {dataFound.todayCases}</p>
            <p>Today's Deaths: {dataFound.todayDeaths}</p>
            <p>Recovered Today: {dataFound.todayRecovered}</p>
        </div>:<h2>{searchedCountry} Not Found</h2>}


        </div>


    </div>
  )
}

export default ModuleTest