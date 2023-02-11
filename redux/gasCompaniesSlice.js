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
      return await gasCompaniesAPI.fetchGasCompanyById(id);
  }
);

export const fetchGasCompanyGasStations = createAsyncThunk(
        'gasCompanies/fetchGasCompanyGasStations',
    async (payload) => {
            const { id } = payload;
            return await gasCompaniesAPI.fetchGasCompanyGasStations(id);
    }
);

export const gasCompaniesSlice = createSlice({
    name: 'gasCompanies',
    initialState: {
        loading: false,
        allGasCompanies: [],
        selectedGasCompanyDetails: null
    },
    extraReducers: (builder) => {
        // GET ALL COMPANIES ==========================================================
        builder.addCase(fetchAllGasCompanies.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchAllGasCompanies.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.allGasCompanies = payload;
        });
        builder.addCase(fetchAllGasCompanies.rejected, (state) => {
            state.loading = false;
            state.selectedGasCompanyDetails = null;
        });

        // FETCH BY ID ==========================================================
        builder.addCase(fetchGasCompanyById.pending, (state) => {
            state.loading = false;
            state.selectedGasCompanyDetails = null;
        });
        builder.addCase(fetchGasCompanyById.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.selectedGasCompanyDetails = payload;
        });
        builder.addCase(fetchGasCompanyById.rejected, (state) => {
            state.loading = false;
            state.selectedGasCompanyDetails = null;
        });

        // FETCH STATIONS OF SELECTED COMPANY BY ID ==========================================================
        builder.addCase(fetchGasCompanyGasStations.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchGasCompanyGasStations.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.selectedGasCompanyDetails.gasStations = payload;
        });
        builder.addCase(fetchGasCompanyGasStations.rejected, (state) => {
            state.loading = false;
            state.selectedGasCompanyDetails.gasStations = [];
        });
    }
});

export default gasCompaniesSlice.reducer