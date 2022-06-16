import { configureStore } from '@reduxjs/toolkit'
import rainfallSettingsReducer from '../components/RainfallSettings/reducer'
import rainfallChartReducer from '../components/RainfallChart/reducer'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

const store =  configureStore({
    reducer: {
        rainfallSettings: rainfallSettingsReducer,
        rainfallChart: rainfallChartReducer
    }
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export default store