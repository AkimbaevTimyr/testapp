import React, {FC} from 'react'
import { useAppDispatch, useAppSelector } from '../../helpers/redux'
import { deleteCity, getCity } from '../../store/actions/CityActionCreator';

const FavoritesCities: FC = () => {
  const dispatch = useAppDispatch();
  const {favoriteCities} = useAppSelector(state => state.city)
  const handleClick = (name: string) =>{
    dispatch(deleteCity(name))
  }
  const handleGet = (name: string) =>{
    dispatch(getCity(name))
  }
  return (
    <div>
        <h3 className='ms-3'>Favorites Cities:</h3>
        <ul className="list-group list-group-flush">
            {favoriteCities.map((el:string) => (
                <li className='list-group-item'>
                    <button className='button-none' onClick={()=> handleGet(el)}>{el}</button>
                    <button type="button" onClick={()=>handleClick(el)} className="btn-close" aria-label="Close"></button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FavoritesCities