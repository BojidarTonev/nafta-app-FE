import { configureStore } from '@reduxjs/toolkit';
import gasCompaniesReducer from './gasCompaniesSlice';
import homeReducer from '../redux/homeSlice';
import fuelsReducer from './fuelsSlice';

export default configureStore({
    reducer: {
        home: homeReducer,
        gasCompanies: gasCompaniesReducer,
        fuels: fuelsReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
    })
})