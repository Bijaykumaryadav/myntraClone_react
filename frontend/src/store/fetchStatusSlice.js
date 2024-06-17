import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, // false:'PENDING' AND true:'DONE'
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true; // Mutate the draft state directly
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true; // Mutate the draft state directly
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false; // Mutate the draft state directly
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice; // Export the reducer function directly
