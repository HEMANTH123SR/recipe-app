import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipesArray: [],
  searchQuery:""
};

export const recipeSlice = createSlice({
  name: "RecipeApp",
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.recipesArray=action.payload.results
    },
    searchQueryHandle:(state,action)=>{
        state.searchQuery=action.payload
    }
  },
});

export const { setRecipes ,searchQueryHandle} = recipeSlice.actions;



