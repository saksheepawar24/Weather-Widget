import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import"./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({UpdateInfo}){
    let [city,setCity] = useState("");

    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="1cc49e574ba3f32ab7de75fcd2d782b6";

    let getWeatherInfo=async()=>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();

        let result ={
            city:city,
            temp: jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            pressure: jsonResponse.main.pressure,
            weather: jsonResponse.weather[0].description
        };
        console.log(result);
        return result;
    };

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit =async(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
       let newinfo = await getWeatherInfo();
       UpdateInfo(newinfo);
    }

    return (
    <div className="SearchBox">
        <h3>SearchBox</h3>
        <form onSubmit={handleSubmit}>
        <TextField id="city-name" 
        label="City Name" 
        variant="outlined" 
        required 
        value={city}
        onChange={handleChange}/>
        <br></br>
        <br></br>
        <Button variant="outlined"type="submit">Search</Button>
        </form>
    </div>
    );
}