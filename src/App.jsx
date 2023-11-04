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
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=00446ee4b9224a22a20aa436c734c309&query=${
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
