import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    const [WeatherInfo,setWeatherInfo]=useState({
            city:"Sakshee Land",
            temp:100,
            tempMin:100,
            tempMax:100,
            humidity:100,
            pressure:20.33,
            weather:"cloudy",
    });

    let UpdateInfo =(newinfo)=>{
        setWeatherInfo(newinfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by saksh</h2>
            <SearchBox UpdateInfo={UpdateInfo}></SearchBox>
            <InfoBox info={WeatherInfo}></InfoBox>
        </div>
    );
}