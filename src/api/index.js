const baseURL = 
"https://api.weatherapi.com/v1/current.json?key=e9e382deffb14e63bdc120726240908"

export const getWeatherDataForCity = async (city) => {
   const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
   return await response.json();
}
 
  const getWeatherDataForLocation = async (lat, lon) => {
   const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`)
   return await response.json();
}

export default getWeatherDataForLocation;