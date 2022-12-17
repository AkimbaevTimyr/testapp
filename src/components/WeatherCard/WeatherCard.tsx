import moment from 'moment';
import React, { FC } from 'react'
import { useAppDispatch } from '../../helpers/redux';
import { addCity } from '../../store/actions/CityActionCreator';

interface WeatherCardProps {
    name: string;
    wind: {
        speed: number;
    };
    weather: {
        description: string;
    }
    main : {
        humidity: number;
        pressure: number;
    }
    sys: {
        sunrise: number;
        sunset: number;
    }
}

const WeatherCard: FC<WeatherCardProps> = ({name, wind, main, weather, sys}) => {
    const dispatch = useAppDispatch()
    const handleClick = (name: string) =>{
        dispatch(addCity(name))
    }
    return (
        <div className="card" >
            <div className="card_date">{moment().format('LL')}</div>
            <div className='card_description'>{weather.description}</div>
            <div className="card_pressure">Pressure: {main.pressure}mb</div>
            <div>Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString('en-IN')}</div>
            <div>Sunset: {new Date(sys.sunset * 1000).toLocaleTimeString('en-IN')}</div>
            <div className="card_wind_speed">Wind speed: {wind?.speed}m/s</div>
            <div className="humidity">Humidity: {main.humidity}%</div>
            <p>Day: {moment().format('dddd')}</p>
            <button onClick={()=> handleClick(name)} type="button" className="btn btn-primary">Добавить</button>
        </div>
    )
}

export default WeatherCard