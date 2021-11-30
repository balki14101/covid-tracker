import {configureStore} from '@reduxjs/toolkit';
import CovidTrackerReducer from './reducer/covidtracker';

export default store = configureStore({
  reducer: {
    covidtracker: CovidTrackerReducer,
  },
});
