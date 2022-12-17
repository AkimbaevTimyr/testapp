import React, {useEffect} from 'react';
import './App.css';
import FavoritesCities from './components/FavoritesCities/FavoritesCities';
import Main from './components/Main';
import { useAppDispatch } from './helpers/redux';
import { setCities } from './store/actions/CityActionCreator';

function App() {
  const dispatch = useAppDispatch()
  useEffect(()=> {
    const data = JSON.parse(localStorage.getItem('cities') || '[]')
    dispatch(setCities(data))
  }, [])
  return (
    <div className='d-flex'>
      <div>
        <FavoritesCities />
      </div>
      <div className="container pt-3">
        <Main />
      </div>
    </div>
  );
}

export default App;
