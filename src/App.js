import './App.css';
import { useEffect } from 'react';
import Card from './components/Card';
import Input from './components/Input'
import Button from './components/Button';
import { useWeather } from './context/weather';

function App() {
  const weather = useWeather()

  useEffect(() => {
weather.fetchCurrentUserLocationData();
  })

  const refresh = () => {
    window.location.reload();
  }

  return (
    <div className="App">
    <h1>Weather Forecast</h1>
    <Input />
    <Button onClick={weather.fetchData} value="Search"/>
    <Card />
    <Button onClick={refresh}  value="Refresh"/>
    </div>
  );
}

export default App;
