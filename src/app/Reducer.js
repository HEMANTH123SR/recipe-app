import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
};

export const recipeSlice = createSlice({
  name: "Recipe",
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.recipes=action.payload.results
    },
  },
});

export const { setRecipes } = recipeSlice.actions;



