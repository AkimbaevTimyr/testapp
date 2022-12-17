import { createSlice } from "@reduxjs/toolkit";
import { addCity, deleteCity, getCity, setCities } from "../actions/CityActionCreator";


const initialState: any = {
    city: {},
    favoriteCities: []
}

const citySlice = createSlice({
    name: "city",
    initialState,
    reducers: {},
    extraReducers: {
        [getCity.fulfilled.type]: (state, action) =>{
            const {name, weather, wind, main, sys} = action.payload.data;
            const w = weather[0];
            state.city = {name, weather :w , wind, main, sys}
        },
        [addCity.fulfilled.type]: (state, action) => {
            const data = JSON.parse(localStorage.getItem('cities') || '[]')
            const city  = (el: string) => el == action.payload;
            if(data.some(city)){
                alert('Данный город уже добавлен')
            }else{
                const d = JSON.parse(localStorage.getItem('cities') || '[]')
                d.push(action.payload)
                localStorage.setItem('cities', JSON.stringify(d))
                state.favoriteCities.push(action.payload)
            }
        },
        [deleteCity.fulfilled.type]: (state, action) =>{
            state.favoriteCities = state.favoriteCities.filter((el: string) => el != action.payload)
        },
        [setCities.fulfilled.type]: (state, action) => {
            state.favoriteCities = action.payload
        }
    }
})

export default citySlice.reducer;