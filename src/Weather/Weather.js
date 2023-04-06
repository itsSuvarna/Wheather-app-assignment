import React, { useState} from "react";

function Weather() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState(" ");
  const [data, setData] = useState(" ");
  //const apiKey = "f56f24967aaf51182d1d4df628297c6d";

  const handleChange = (e) => {
    setCity(e.target.value);
    selectCity(city);
  };

  // const selectCity=(city)=>{
  const HandleSearch = () => {
    setSearch(city);
    selectCity(search);
  };
  //console.log(search)

  const selectCity = (search) => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        search +
        "&appid=" +
        "f56f24967aaf51182d1d4df628297c6d"
    )
      .then((res) => res.json())
      .then((allData) => setData(allData));
  };
  console.log(data)

  return (
            <>
            <h1 className="heading">Weather App </h1>
            <input className="ins" type="text" onChange={handleChange} />
              <button onClick={HandleSearch}>search</button>
          

              {data?.map((data) => {
                return(
                   <>
                       <h1 className="sffg">{data.name}</h1>
                     <div>
                      temp-max:<span style={{color:"red"}}>{data.main.temp_max}</span>
                      temp-min:<span style={{color:"red"}}>{data.main.temp_min}</span>
                      <span >wind-speed:{data.wind.speed}</span>
                  
                     </div>
                  </>
                );})}
       </>
      );
                }
export default Weather;