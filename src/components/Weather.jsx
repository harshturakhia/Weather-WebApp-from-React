import React, { useEffect } from 'react'
import { useState } from 'react'

import '../App.css'

const Weather = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('Junagadh');

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b5cf687e6d48b89a4e20adc52cd784f4`
            const response = await fetch(url)
            const jsonRes = await response.json();
            console.log(jsonRes)
            setCity(jsonRes.main)
        }
        fetchApi();
    }, [search])

    return (
        <>
            <div className='box'>
                <h1 className='heading'>Weather Forecast</h1>
                <div className='inputData'>
                    <input type="search" className='inputField' onChange={(event) => {
                        setSearch(event.target.value)
                    }} style={{ textAlign: 'center' }} />
                </div>

                {
                    !city ? (
                        <p>No data found</p>
                    ) : (
                        <div>
                            <div className="info">
                                <h2 className='location' style={{ fontSize: '2.9rem' }}>
                                    <i className='fas fa-street-view'></i>
                                    {search}
                                </h2>
                                <h1 className='temp'>
                                    {city.temp}°Cel
                                </h1>
                                <h2 className='tempMin'>
                                    Min : {city.temp_min}°Cel
                                </h2>
                                <h2 className='tempMax'>
                                    Max : {city.temp_max}°Cel
                                </h2>
                                <h2 className='pressure'>
                                    Pressure : {city.pressure}
                                </h2>
                                <h2 className='humidity'>
                                    Humidity : {city.humidity}
                                </h2>
                            </div>

                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Weather
