import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {NAFTA_APP_CONSTANTS} from "../constants";

// thunk creation comes first
export const fetchFuelsAveragePrice = createAsyncThunk(
    `fuels/getAveragePrice`,
    async () => {
        // should be => await fuelsAPI.fetchAveragePrice(name)
        try {
            const promises = [
                axios.get(`${NAFTA_APP_CONSTANTS.API.ENDPOINT_URL}/price`, {params: {fuel: 'gasoline', date: '2023-01-31', key: NAFTA_APP_CONSTANTS.API.KEY}}),
                axios.get(`${NAFTA_APP_CONSTANTS.API.ENDPOINT_URL}/price`, {params: {fuel: 'diesel', date: '2023-01-31', key: NAFTA_APP_CONSTANTS.API.KEY}}),
                axios.get(`${NAFTA_APP_CONSTANTS.API.ENDPOINT_URL}/price`, {params: {fuel: 'lpg', date: '2023-01-31', key: NAFTA_APP_CONSTANTS.API.KEY}}),
                axios.get(`${NAFTA_APP_CONSTANTS.API.ENDPOINT_URL}/price`, {params: {fuel: 'methane', date: '2023-01-31', key: NAFTA_APP_CONSTANTS.API.KEY}})
            ];
            const data = await Promise.all(promises);
            return data.map((item) => item.data);
        } catch (e) {
            console.error("ERROR IN API => ", e);
            // return { companyName, stations: []};
        }
    }
);

export const fuelsSlice = createSlice({
    name: 'fuels',
    initialState: {
        loading: false,
        fuelsAveragePrices: [],
        selectedFuel: null
    },
    reducers: {
        fuelsLoading: (state) => {
            if(state.loading) {
                state.loading = true;
            }
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchFuelsAveragePrice.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchFuelsAveragePrice.fulfilled, (state, {payload}) => {
            state.loading = false;
            console.log('payload => ', payload)
            state.fuelsAveragePrices = payload;
        })
        builder.addCase(fetchFuelsAveragePrice.rejected, (state) => {
            state.loading = false;
            state.fuelsAveragePrices = [];
        })
    }
})

// Action creators are generated for each case reducer function
export const { fuelsLoading } = fuelsSlice.actions

export default fuelsSlice.reducer