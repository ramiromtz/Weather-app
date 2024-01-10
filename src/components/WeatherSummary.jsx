const WeatherSummary = ({ weatherData }) => {
    const { main, name, sys, wind, weather } = weatherData;
    const temperaturaCelsius = main?.temp - 273.15;

    // Get Date
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const weatherImage = () => {
        if (weatherData && weatherData.weather && weatherData.weather[0]) {
            const weatherCondition = weather[0]?.main.toLowerCase();

            const weatherImages = {
                'clear': 'url(./clear.png)',
                'clouds': 'url(./clouds.png)',
                'rain': 'url(./rain.png)',
                'snow': 'url(./snow.png)',
                'thunderstorm': 'url(./thunderstorm.png)'
            }

            return weatherImages[weatherCondition] || 'url(./clear.png)';
        }

        return 'url(./clear.png)';
    }

    return (
        <div className="mt-8 flex justify-between">
            {
                weatherData && weatherData.cod !== '404' ? (
                    <>
                        <div className="flex flex-col gap-y-3.5 w-[60%] text-center">
                            <h3 className="text-white">{dayNames[day]}</h3>
                            <h1 className="text-3xl text-white">{name}, {sys?.country}</h1>
                            <h1 className="text-4xl text-white">{ temperaturaCelsius ? Math.ceil(temperaturaCelsius) : 'Loading...'}°C</h1>
                            {/* Center image */}
                            <div className="m-auto" style={{ backgroundImage:  weatherImage(), width: '100px', height: '100px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
                            <h3 className="text-white border-b border-[#C86F43] pb-2">{weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ''}</h3>
                            <h2 className="text-white">{monthsNames[month - 1]}, {year}</h2>
                        </div>
                        <div className="w-[40%]">
                            {/* Humidity */}
                            <div className="flex justify-between border-b-2 border-b-[#C86F43] pb-2">
                                <h2 className="text-white">Humidity</h2>
                                <h3 className="text-white">{main?.humidity}%</h3>
                            </div>
                            {/* Wind Speed */}
                            <div className="flex justify-between border-b-2 border-b-[#C86F43] pb-2 mt-6">
                                <h2 className="text-white">Windy speed</h2>
                                <h3 className="text-white">{wind?.speed} km/h</h3>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex justify-center items-center w-full h-full">
                        <h1 className="text-3xl text-white">City Not found</h1>
                    </div>
                )
            }
        </div>
    )
}

export default WeatherSummary;