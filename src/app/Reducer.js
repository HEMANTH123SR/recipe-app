import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipesArray: [],
  searchQuery:"",
  searchId:{},
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
    },searchIdHandler:(state,action)=>{
      state.searchId=action.payload
    }
  },
});

export const { setRecipes ,searchQueryHandle,searchIdHandler} = recipeSlice.actions;



