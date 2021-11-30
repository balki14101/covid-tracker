import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import apiclient from '../apiclient';

export const fetchSummary = createAsyncThunk(
  'fetchSummary',
  async (userId, thunkAPI) => {
    const summaryResponse = await apiclient.get('summary');
    return summaryResponse;
  },
);
export const fetchCountries = createAsyncThunk(
  'fetchCountries',
  async (userId, thunkAPI) => {
    const countriesResponse = await apiclient.get('countries');
    return countriesResponse;
  },
);
export const fetchCountrystats = createAsyncThunk(
  'fetchCountrystats',
  async slug => {
    const countryStatsResponse = await apiclient.get(`dayone/country/${slug}`);
    return countryStatsResponse;
  },
);

const initialState = {
  global: [],
  countries: [],
  countryStats: [],
  filteredDataSource: [],
  masterDataSource: [],
};

export const covidtrackerslice = createSlice({
  name: 'covidtracker',
  initialState,
  reducers: {
    setFilteredDataSource: (state, action) => {
      state.filteredDataSource = action.payload;
    },
    setMasterDataSource: (state, action) => {
      state.masterDataSource = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchSummary.fulfilled, (state, action) => {
      state.global = action.payload.Global;
      //   state.countries = action.payload.Countries;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      // state.global = action.payload.Global;
      state.countries = action.payload;
    });
    builder.addCase(fetchCountrystats.fulfilled, (state, action) => {
      // state.global = action.payload.Global;
      state.countryStats = action.payload;
    });
  },
});
export const {setFilteredDataSource, setMasterDataSource} =
  covidtrackerslice.actions;

export default covidtrackerslice.reducer;
