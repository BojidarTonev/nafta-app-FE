import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import gasCompaniesApi from "../api/gasCompaniesAPI";
import gasCompaniesAPI from "../api/gasCompaniesAPI";

// thunk creation comes first
export const fetchAllGasCompanies = createAsyncThunk(
    `gasCompanies/fetchAllGasCompanies`,
    async () => await gasCompaniesApi.fetchAllGasCompanies()
);

export const fetchGasCompanyById = createAsyncThunk(
  'gasCompanies/fetchGasCompanyDetails',
  async (payload) => {
      const { id } = payload;
      const response = await gasCompaniesAPI.fetchGasCompanyById(id);

      return response.data;
  }
);

export const gasCompaniesSlice = createSlice({
    name: 'gasCompanies',
    initialState: {
        loading: false,
        allGasCompanies: [],
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
        // GET ALL COMPANIES ==========================================================
        builder.addCase(fetchAllGasCompanies.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchAllGasCompanies.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.allGasCompanies = payload;
        })
        builder.addCase(fetchAllGasCompanies.rejected, (state) => {
            state.loading = false;
            state.selectedGasCompanyDetails = null;
        })

        // FETCH BY ID ==========================================================
        builder.addCase(fetchGasCompanyById.pending, (state) => {
            state.loading = false;
            state.selectedGasCompanyDetails = null;
        })
        builder.addCase(fetchGasCompanyById.fulfilled, (state, { payload }) => {
            state.loading = false;
            // more logic here
            state.selectedGasCompanyDetails = payload;
        })
        builder.addCase(fetchGasCompanyById.rejected, (state) => {
            state.loading = false;
            state.selectedGasCompanyDetails = null;
        })

        // FETCH STATIONS OF SELECTED COMPANY ID ==========================================================
    }
})

// Action creators are generated for each case reducer function
export const { gasCompaniesLoading } = gasCompaniesSlice.actions

export default gasCompaniesSlice.reducer

// try {
//     const { data } = await axios.get(`${NAFTA_APP_CONSTANTS.API.ENDPOINT_URL}/gasstations`, {
//         params: {
//             key: NAFTA_APP_CONSTANTS.API.KEY,
//             brand_id: id,
//             offset,
//             limit
//         }
//     });
//     return { companyName, stations: data.gasstations};