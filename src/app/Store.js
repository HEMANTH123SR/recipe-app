// import { configureStore } from "@reduxjs/toolkit";
// import {recipeSlice} from "./Reducer";
// export const store = configureStore({
//     recipes: recipeSlice.reducer, 
// });

// import { configureStore } from "@reduxjs/toolkit";
// import { recipeSlice } from "./Reducer";

// export const store = configureStore({
//   reducer: {
//     recipes: recipeSlice.reducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import { recipeSlice } from "./Reducer";

export const store = configureStore({
  reducer: {
    recipes: recipeSlice.reducer,
  },
});

