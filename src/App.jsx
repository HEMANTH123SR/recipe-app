import { useEffect, useState } from "react";
import InputContent from "./components/InputContent";
import Nav from "./components/Nav";
import RecipeCard from "./components/RecipeCard";
import { useDispatch,useSelector } from "react-redux";
import { setRecipes } from "./app/Reducer";

const App = () => {
  const dispatch = useDispatch();
  const recipes=useSelector(state => state.recipes)

  useEffect(() => {
      
      fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7acc7f72ce02496da7e9c1edd818a3e4&query=Chicken`)
      .then((data) => data.json())
      .then((res) => {
        dispatch(setRecipes(res.results))
        console.log(recipes)
        console.log(Array.isArray(recipes))
      })
      .catch((e) => console.log(e));
  
  }, []);
  return (
    <div>
      <Nav />
      <div className="p-4">
        <InputContent />
        <div className="p-5"></div>
        <div>
        {/* {recipes ? (
        recipes.map(({ id, title, image }) => (
          <RecipeCard id={id} title={title} image={image} key={id} />
        ))
      ) : (
        <h1 className="text-center text-red-600 text-xl">Loading or no data available</h1>
      )}
   */}

      </div>
      </div>
    </div>
  );
};

export default App;
