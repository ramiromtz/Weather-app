import { useState } from "react";

const SearchInput = ({ setWeatherData, API_KEY }) => {

    const [nameCity, setNameCity] = useState("");
    function handleSearch() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity.trim()}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => setWeatherData(data));
    }

    return (
        <div className="flex items-center">
            <input 
                type="text" 
                className="w-full rounded-md border outline-[#C5D0D3] py-1 px-4 bg-transparent text-white placeholder-white focus:outline-2" 
                placeholder="Search..." 
                value={nameCity}
                onChange={(e) => setNameCity(e.target.value)}
            />
            {/* Disabled button when no city */}
            <button className={`ml-2 bg-[#C86F43] hover:bg-[#C86F18] p-2 rounded-md text-white disabled:bg-[#ccc]`} onClick={handleSearch} disabled={!nameCity}>
                <img className="w-5 h-5" src="./searchIcon.svg" alt="Search Icon" />
            </button>
        </div>
    );
}

export default SearchInput;