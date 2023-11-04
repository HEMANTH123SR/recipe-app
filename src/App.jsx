import { useEffect, useState } from "react";

import Nav from "./components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { setRecipes } from "./app/Reducer";

import { Outlet } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=ffa7b4a031934e269d6643c0b4b8bb1f&query=${
        recipes.searchQuery && recipes.searchQuery.length > 1
          ? recipes.searchQuery
          : "pasta"
      }`
    )
      .then((data) => data.json())
      .then((res) => {
        dispatch(setRecipes(res));
        console.log(recipes);
      })
      .catch((e) => console.log(e));
  }, [recipes.searchQuery]);
  return (
    <div>
      <Nav />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
