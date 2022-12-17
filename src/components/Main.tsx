import React, {FC} from 'react'
import { useAppSelector } from '../helpers/redux'
import Inputs from './Inputs/Inputs'
import WeatherCard from './WeatherCard/WeatherCard'

const Main: FC = () =>  {
  const {city} = useAppSelector(state => state.city)
  return (
    <div className="main">
        <Inputs />
        <div className="main_items">
            {Object.keys(city).length == 0  ? 'Ничего не найдено' : <WeatherCard name={city.name} wind={city.wind} main={city.main} sys={city.sys} weather={city.weather} />}
        </div>
    </div>
  )
}

export default Main