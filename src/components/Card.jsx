import React from "react";
import { useWeather } from "../context/weather";

const Card = () => {
    const weather = useWeather();
    return (
        <div className="card">
        <img src={weather?.data?.current?.condition?.icon} alt="" />
       <h2>{weather.data?.current?.temp_c} </h2>
       <h3>{weather.data?.location?.name} {weather.data?.location?.region} {weather.data?.location?.country}</h3>
        </div>
    )
}
export default Card 