import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import fuelsApi from '../api/fuelsAPI';

// thunk creation comes first
export const fetchAllFuels = createAsyncThunk(
    `fuels/fetchAllFuels`,
    async () => await fuelsApi.fetchAllFuels()
);

export const fuelsSlice = createSlice({
    name: 'fuels',
    initialState: {
        loading: false,
        allFuels: [],
        selectedFuel: null
    },
    reducers: {
        fuelsLoading: (state) => {
            if(state.loading) {
                state.loading = true;
            }
            state.loading = false;
        },
        setSelectedFuel: (state, {payload}) => {
            state.selectedFuel = payload;
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchAllFuels.pending, (state) => {
            state.loading = true;
            state.allFuels = [];
        })
        builder.addCase(fetchAllFuels.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.allFuels = payload;
        })
        builder.addCase(fetchAllFuels.rejected, (state) => {
            state.loading = false;
            state.allFuels = [];
        })
    }
})

// Action creators are generated for each case reducer function
export const { setSelectedFuel } = fuelsSlice.actions

export default fuelsSlice.reducer