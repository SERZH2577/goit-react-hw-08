import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter(state, action) {
      state.name = action.payload.trim();
    },
  },
});

export const { setFilter } = slice.actions;
export const filtersReducer = slice.reducer;
