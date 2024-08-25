import React from 'react';
import './Weather.css';

const Weather = () => {
    return (
        <div className='weather'>
            <div className='search-bar'>
                <input type="text" placeholder='Search' />
                <img src={('assets/search.png')} alt="" />
            </div>
            
            <img src={('assets/clear.png')} alt="" className='weather-icon' />
            <p className='temperature'>16°C</p>
            <p className='location'>London</p>

            <div className='weather-data'>
                <div className="col">
                    <img src={('assets/humidity.png')} alt="" />
                    <div>
                        <p>91 %</p>
                        <span>Humidity</span>
                    </div>
                </div>

                <div className="col">
                    <img src={('assets/wind.png')} alt="" />
                    <div>
                        <p>3.6 Km/h</p>
                        <span>Wind speed</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
