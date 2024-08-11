import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity } from "../api";
import getWeatherDataForLocation from '../api'

const WeatherContext = createContext(null);

export const  useWeather = () => {
    return useContext(WeatherContext);
}


export const WeatherProvider = (props) => {
   const [data, setData] = useState(undefined);
   const [searchCity, setSearchCity] = useState(undefined);

   const fetchData = async () => {
    const response =  await getWeatherDataForCity(searchCity)
    setData(response);
}


const fetchCurrentUserLocationData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        getWeatherDataForLocation(
            position.coords.latitude, 
            position.coords.longitude).then((data) => setData(data))
            console.log(data);
    })
}



// const fetchcurrentLocation = () => {
//     const fetchCurrentUserLocationData = () => {
    
//         const getCurrentPositionPromise = () => {
//       return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(
//           (position) => resolve(position),
//           (error) => reject(error)
//         );
//       });
//     };
  
//     getCurrentPositionPromise()
//       .then((position) => {
//         const { latitude, longitude } = position.coords;
//         return getWeatherDataForLocation(latitude, longitude); // Assuming this returns a Promise
//       })
//       .then((data) => {
//         setData(data); // Set the weather data
//       })
//       .catch((error) => {
//         console.error("Error fetching location or weather data:", error);
//       });
//   };

 return (
 <WeatherContext.Provider
    value={{ searchCity, data, setSearchCity, fetchData, fetchCurrentUserLocationData}}>
        {props.children}
    </WeatherContext.Provider>
 )
}