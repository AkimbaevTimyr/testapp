import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const getCity = createAsyncThunk(
    'user/getCity',
    async (city: string, thunkAPI) => {
        try {
            const data  =  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6247cfc37e9c17450a95fc3265a1ccd4`)
            return data
        } catch (e) {
            console.log(e)
        }
    }
)


export const addCity = createAsyncThunk(
    "user/addCity",
    async(name: string, thunkAPI) => {
        try{
            return name
        }catch(e){
            console.log(e)
        }
    }
)

export const deleteCity = createAsyncThunk(
    'user/deleteCity',
    async(name: string, thunkAPI) => {
        try{
            const arr = JSON.parse(localStorage.getItem('cities') || '')
            const newArr = arr.filter((el:string) => el != name)
            localStorage.setItem('cities', JSON.stringify(newArr))
            return name
        }catch(e){
            console.log(e)
        }
    }
)


export const setCities = createAsyncThunk(
    'user/setCities',
    async(obj: [], thunkAPI) => {
        try{
            return obj
        }catch(e){
            console.log(e)
        }
    }
)