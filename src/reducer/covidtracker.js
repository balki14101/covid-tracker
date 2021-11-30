import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import apiclient from '../apiclient';

export const fetchSummary = createAsyncThunk(
  'fetchSummary',
  async (userId, thunkAPI) => {
    const summaryResponse = await apiclient.get('summary');
    return summaryResponse;
  },
);

const initialState = {
  global: [],
  countries: [],
};

export const covidtrackerslice = createSlice({
  name: 'covidtracker',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchSummary.fulfilled, (state, action) => {
      state.global = action.payload.Global;
      state.countries = action.payload.Countries;
    });
  },
});

// export const {
//   setSelectedCategory,
//   clearStories,
//   setShowAuthorName,
//   clearTrendingTopicFeed,
// } = newsslice.actions;

export default covidtrackerslice.reducer;
