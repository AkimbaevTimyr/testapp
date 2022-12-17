import React, {FC, useState} from 'react'
import { useAppDispatch } from '../../helpers/redux'
import { getCity } from '../../store/actions/CityActionCreator'

const Inputs: FC = () => {
  const [city, setCity]  = useState<string>('')
  const dispatch = useAppDispatch();

  const handleClick = () =>{
    dispatch(getCity(city))
  }

  return (
    <div className="form-floating mb-3 d-flex">
        <input type="text" className="form-control me-5" style={{ width: "500px"}}   placeholder="London" onChange={(e) => setCity(e.target.value)} />
        <label>City</label>
        <button onClick={handleClick} type="button" className="btn btn-primary">Поиск</button>
    </div>
  )
}

export default Inputs