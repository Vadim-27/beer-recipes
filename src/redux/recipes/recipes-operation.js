import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/services/beerApi';

export const fetchAllRecipes = createAsyncThunk(
  'recipes/all',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getAllRecipes(data);

      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
