import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchIdHandler } from "../app/Reducer";
import {
  Tags,
  IngredientAndAnalyzedInstructions,
} from "./DetailCardComponents";
import Footer from "./Footer";

const DetailCard = () => {
  const location = useLocation();
  const recipeId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const { searchId } = useSelector((state) => state.recipes);
  const [error, setError] = useState(null);

  // the below gives the summary of the recipe

  const nutritionInfo = searchId.nutrition || {};
  const percentOfDailyNeeds = nutritionInfo.percentOfDailyNeeds || "N/A";

  const pricePerServing = searchId.pricePerServing
    ? `$${searchId.pricePerServing.toFixed(2)}`
    : "N/A";

  const ingredientsList = searchId.extendedIngredients
    ? searchId.extendedIngredients
        .map((ingredient) => ingredient.name)
        .join(", ")
    : "N/A";

  const summary = `${searchId.title} is a delightful main course recipe that serves ${searchId.servings}. It contains ${searchId.healthScore} calories, ${searchId.protein}g of protein, and ${searchId.fat}g of fat per serving. The cost per serving is ${pricePerServing}, covering ${percentOfDailyNeeds} of your daily requirements for vitamins and minerals. This recipe has a Spoonacular score of ${searchId.spoonacularScore}%, which is considered good. It includes ${ingredientsList}, making it a scrumptious choice for any occasion.`;

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=00446ee4b9224a22a20aa436c734c309`
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
        
        <div className=" bg-slate-200 absolute w-full">
            <div className="p-3 lg:p-14 xl:p-14">
          {/* <h3 className="absolute rounded-full
          bg-green-600 text-slate-200 shadow-xl
          md:p-5 md:text-3xl md:right-24 md:top-6 md:font-extrabold 
          lg:p-5 lg:text-3xl lg:right-24 lg:top-6 lg:font-extrabold 
          xl:p-5 xl:text-3xl xl:right-24 xl:top-6 xl:font-extrabold 
          right-0
          top-0
          p-4
          text-xl
          font-bold
          ">
            {searchId.healthScore}
          </h3> */}
          <div className="flex flex-col lg:flex-row xl:flex-row  space-x-7">
            
            <img
              src={searchId.image}
              className="m-8 sm:m-14 xl:h-2/3 xl:w-2/3 lg:h-2/5 lg:w-2/5 rounded-lg shadow-xl align-middle"
            />
            
            <div className="flex flex-col items-center">
              <h1 className="text-3xl text-green-600 font-bold m-3 underline">
                {searchId.title}
              </h1>
              <p className="text-green-600">{summary}</p>
              <Tags searchId={searchId} />
            </div>

            <div />
          
          </div>
          
          <IngredientAndAnalyzedInstructions searchId={searchId} />
         
          <div className="mt-9">
            
            </div>
            </div>
            <Footer/>
            </div>
       
      )}
    </div>
  );
};



export default DetailCard;
