import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
};

export const recipeSlice = createSlice({
  name: "Recipe",
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.recipes=[
        {
            "id": 637876,
            "title": "Chicken 65",
            "image": "https://spoonacular.com/recipeImages/637876-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 716342,
            "title": "Chicken Suya",
            "image": "https://spoonacular.com/recipeImages/716342-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 638420,
            "title": "Chicken Wings",
            "image": "https://spoonacular.com/recipeImages/638420-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 638308,
            "title": "Chicken Satay",
            "image": "https://spoonacular.com/recipeImages/638308-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 638086,
            "title": "Chicken Fingers",
            "image": "https://spoonacular.com/recipeImages/638086-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 638174,
            "title": "Chicken Lo Mein",
            "image": "https://spoonacular.com/recipeImages/638174-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 667707,
            "title": "chicken marbella",
            "image": "https://spoonacular.com/recipeImages/667707-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 638257,
            "title": "Chicken Porridge",
            "image": "https://spoonacular.com/recipeImages/638257-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 637999,
            "title": "Chicken Burritos",
            "image": "https://spoonacular.com/recipeImages/637999-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 638125,
            "title": "Chicken In A Pot",
            "image": "https://spoonacular.com/recipeImages/638125-312x231.jpg",
            "imageType": "jpg"
        }
    ]
    },
  },
});

export const { setRecipes } = recipeSlice.actions;



