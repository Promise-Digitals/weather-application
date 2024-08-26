import React, { useEffect, useRef, useState } from 'react';
import './Weather.css';

const Weather = () => {

    const inputRef = useRef()
    const [weatherData, setWeatherData] = useState(false);

    const allIcons = {
        "01d": 'assets/clear.png',
        "01n": 'assets/clear.png',
        "02d": 'assets/cloud.png',
        "02n": 'assets/cloud.png',
        "03d": 'assets/cloud.png',
        "03n": 'assets/cloud.png',
        "04d": 'assets/drizzle.png',
        "04n": 'assets/drizzle.png',
        "09d": 'assets/rain.png',
        "09n": 'assets/rain.png',
        "10d": 'assets/rain.png',
        "10n": 'assets/rain.png',
        "13d": 'assets/snow.png',
        "13n": 'assets/snow.png'
    }

    const search = async (city) => {
        if (city === "") {
            alert("Enter City Name!")
            return;
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;

            const response = await fetch(url);
            const data = await response.json();

            if(!response.ok){
                alert(data.message);
                return;
            }

            const icon = allIcons[data.weather[0].icon] || clear_icon;
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            })

        } catch (error) {
            setWeatherData(false);
            console.error("Error occured while fetching weather data.");
        }
    }



    useEffect(() => {
        search("London");
    }, [])



    return (
        <div className='weather'>
            <div className='search-bar'>
                <input type="text" placeholder='Search' ref={inputRef} />
                <img src={('assets/search.png')} alt="" onClick={() => search(inputRef.current.value)} />
            </div>

            {weatherData ? <>
                <img src={(weatherData.icon)} alt="" className='weather-icon' />
                <p className='temperature'>{weatherData.temperature}°C</p>
                <p className='location'>{weatherData.location}</p>

                <div className='weather-data'>
                    <div className="col">
                        <img src={('assets/humidity.png')} alt="" />
                        <div>
                            <p>{weatherData.humidity} %</p>
                            <span>Humidity</span>
                        </div>
                    </div>

                    <div className="col">
                        <img src={('assets/wind.png')} alt="" />
                        <div>
                            <p>{weatherData.windSpeed} Km/h</p>
                            <span>Wind speed</span>
                        </div>
                    </div>
                </div>
            </> : <></>}
        </div>
    )
}

export default Weather
