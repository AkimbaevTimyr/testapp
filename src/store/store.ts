import { combineReducers, configureStore, } from "@reduxjs/toolkit";
import cityReducer from './reducers/CitySlice'


export const rootReducer = combineReducers<any>({
   city: cityReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>; 
export type AppDispatch = AppStore['dispatch']