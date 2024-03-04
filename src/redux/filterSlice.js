import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    filteredValue: (_, action) => {
      return action.payload;
    },
  },
});

export const { filteredValue: filterNumbers } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;