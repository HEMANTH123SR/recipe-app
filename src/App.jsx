import { useEffect, useState } from "react";
import InputContent from "./components/InputContent";
import Nav from "./components/Nav";
import RecipeCard from "./components/RecipeCard";
import { useDispatch, useSelector } from "react-redux";
import { setRecipes } from "./app/Reducer";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=00446ee4b9224a22a20aa436c734c309&query=${recipes.searchQuery && recipes.searchQuery.length > 1    ? recipes.searchQuery : "pasta"}`
    )
      .then((data) => data.json())
      .then((res) => {
        dispatch(setRecipes(res))
        console.log(recipes)
      })
      .catch((e) => console.log(e));
  }, [recipes.searchQuery]);
  return (
    <div>
      <Nav />
      <div className="p-4">
        <InputContent />
        <div className="p-5"></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recipes.recipesArray ? (
        recipes.recipesArray.map(({ id, title, image }) => (
          <RecipeCard id={id} title={title} image={image} key={id} />
        ))
      ) : (
        <h1 className="text-center text-red-600 text-xl">Loading or no data available</h1>
      )}
  
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;


