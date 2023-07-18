import { createSlice } from '@reduxjs/toolkit';

import { fetchAllRecipes } from './recipes-operation';

const usersInitialState = {
  recipes: [],
  isLoading: false,
  error: null,
};
const handlePending = state => {
  state.isLoading = true;
};
const handleReject = (state, action) => {
  state.recipes = [];
  state.isLoading = false;
  state.error = action.payload;
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: usersInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllRecipes.pending, state => {
        handlePending(state);
      })
      .addCase(fetchAllRecipes.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        state.recipes = payload.length > 15 ? payload.slice(-15) : payload;
        state.error = null;
      })
      .addCase(fetchAllRecipes.rejected, (state, action) => {
        handleReject(state, action);
      });
  },
});

export default recipesSlice.reducer;
