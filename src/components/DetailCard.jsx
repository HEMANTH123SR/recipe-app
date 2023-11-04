import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchIdHandler } from "../app/Reducer";

const DetailCard = () => {
  const location = useLocation();
  const recipeId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const { searchId } = useSelector((state) => state.recipes);
  const [error, setError] = useState(null);

  // the below gives the summary of the recipe 

  const nutritionInfo = searchId.nutrition || {};
  const percentOfDailyNeeds = nutritionInfo.percentOfDailyNeeds || 'N/A';
  
  const pricePerServing = searchId.pricePerServing ? `$${searchId.pricePerServing.toFixed(2)}` : 'N/A';
  
  const ingredientsList = searchId.extendedIngredients ? searchId.extendedIngredients.map(ingredient => ingredient.name).join(', ') : 'N/A';

  const summary = `${searchId.title} is a delightful main course recipe that serves ${searchId.servings}. It contains ${searchId.healthScore} calories, ${searchId.protein}g of protein, and ${searchId.fat}g of fat per serving. The cost per serving is ${pricePerServing}, covering ${percentOfDailyNeeds} of your daily requirements for vitamins and minerals. This recipe has a Spoonacular score of ${searchId.spoonacularScore}%, which is considered good. It includes ${ingredientsList}, making it a scrumptious choice for any occasion.`;
  


  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=ffa7b4a031934e269d6643c0b4b8bb1f`
    )
      .then((res) => res.json())
      .then((data) => dispatch(searchIdHandler(data)))
      .catch((e) => setError(e));

    console.log(searchId);
  }, [recipeId, dispatch]);

  return (
    <div>
      {error ? (
        <h1>Something went wrong: {error.message}</h1>
      ) : (
        <div className="p-14 bg-slate-200">
          <div className="flex flex-row space-x-7">
            <img src={searchId.image} className="h-72 w-96 rounded-lg" />
            <div className="flex flex-col items-center">
              <h1 className="text-3xl text-green-600 font-bold m-3 underline">
                {searchId.title}
              </h1>
              <h1 className="text-green-500">
                {summary}
              </h1>
            </div>
            <div />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailCard;

