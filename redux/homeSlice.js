import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {NAFTA_APP_CONSTANTS} from "../constants";

// thunk creation comes first
export const fetchBestPriceNearestStations = createAsyncThunk(
    `home/getBestPrice`,
    async (payload) => {
        // should be => await homeAPI.fetchNearestBestPriceStations(id)
        try {
            const { data } = await axios.get(`${NAFTA_APP_CONSTANTS.API.ENDPOINT_URL}/near`, {
                params: {
                    key: NAFTA_APP_CONSTANTS.API.KEY,
                    ...payload
                }
            });
            return data.gasstations.sort((a, b) => a.distance - b.distance);
        } catch (e) {
            console.error("ERROR IN API => ", e);
            return { companyName, stations: []};
        }
    }
);

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        loading: false,
        gasStations: [],
        selectedBestPriceStation: null
    },
    reducers: {
        homeLoading: (state) => {
            if(state.loading) {
                state.loading = true;
            }
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchBestPriceNearestStations.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchBestPriceNearestStations.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.gasStations = payload;
        })
        builder.addCase(fetchBestPriceNearestStations.rejected, (state) => {
            state.loading = false;
            state.selectedGasCompanyDetails = null;
        })
    }
})

// Action creators are generated for each case reducer function
export const { homeLoading } = homeSlice.actions

export default homeSlice.reducer