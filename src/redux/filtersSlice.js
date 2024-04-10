import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter: {
      reducer(state, action) {
        state.name = action.payload;
      },
      prepare(filter) {
        return { payload: filter };
      },
    },
  },
});

export const { setFilter } = slice.actions;
export const selectFilters = (state) => state.filters.name;
export const filtersReducer = slice.reducer;
