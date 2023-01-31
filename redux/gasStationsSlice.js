import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {NAFTA_APP_CONSTANTS} from "../constants";

// thunk creation comes first
export const fetchGasCompanyDetailsById = createAsyncThunk(
    `gasCompanies/getCompanyDetails`,
    async (payload) => {
        const {id, companyName, offset, limit} = payload
        // should be => await gasStationsAPI.fetchGasCompanyById(userId)
        try {
            const { data } = await axios.get(`${NAFTA_APP_CONSTANTS.API.ENDPOINT_URL}/gasstations`, {
                params: {
                    key: NAFTA_APP_CONSTANTS.API.KEY,
                    brand_id: id,
                    offset,
                    limit
                }
            });
            return { companyName, stations: data.gasstations};
        } catch (e) {
            console.error("ERROR IN API => ", e);
            return { companyName, stations: []};
        }
    }
);

export const gasStationsSlice = createSlice({
    name: 'gasCompanies',
    initialState: {
        loading: false,
        gasCompanies: [],
        selectedGasCompanyDetails: null
    },
    reducers: {
        gasCompaniesLoading: (state) => {
            if(state.loading) {
                state.loading = true;
            }
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchGasCompanyDetailsById.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchGasCompanyDetailsById.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.selectedGasCompanyDetails = payload;
        })
        builder.addCase(fetchGasCompanyDetailsById.rejected, (state) => {
            state.loading = false;
            state.selectedGasCompanyDetails = null;
        })
    }
})

// Action creators are generated for each case reducer function
export const { gasCompaniesLoading } = gasStationsSlice.actions

export default gasStationsSlice.reducer