import { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import WeatherSummary from "./components/WeatherSummary";

function App() {

  const [weatherData, setWeatherData] = useState({});
  const API_KEY = "8529d8b475a5a275e760ffd7ad18fe3b";

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => setWeatherData(data));
  }, []);

  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-1/2 h-1/2 bg-gradient-to-tr from-[#416D6D] to-[#608E8E] rounded-lg p-8">
        <SearchInput setWeatherData={setWeatherData} API_KEY={API_KEY}/>
        <WeatherSummary weatherData={weatherData}/>
      </div>
    </div>
  );
}

export default App;
