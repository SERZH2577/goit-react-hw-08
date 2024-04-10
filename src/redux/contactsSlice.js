import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchAll, deleteContact, addContact } from "./contactsOps";
import { selectFilters } from "./filtersSlice";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchAll.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAll.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const selectContacts = (state) => state.contacts.items;
export const contactsReducer = slice.reducer;

export const selectFilteredContacts = createSelector(
  [selectFilters, selectContacts],
  (filterContacts, contacts) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterContacts.trim().toLowerCase())
    );
  }
);
