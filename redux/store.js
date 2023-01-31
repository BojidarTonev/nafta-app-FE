import { configureStore } from '@reduxjs/toolkit';
import gasStationsReducer from '../redux/gasStationsSlice';
import homeReducer from '../redux/homeSlice';
import fuelsReducer from '../redux/fuelsSlice';

export default configureStore({
    reducer: {
        home: homeReducer,
        gasStations: gasStationsReducer,
        fuels: fuelsReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
    })
})