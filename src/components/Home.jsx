import { useSelector } from "react-redux";
import Footer from "./Footer";
import InputContent from "./InputContent";
import RecipeCard from "./RecipeCard";

const Home = () => {
    const recipes=useSelector(state=>state.recipes)
  return (
    <div>
      <InputContent />
      <div className="p-5"></div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {recipes.recipesArray ? (
          recipes.recipesArray.map(({ id, title, image }) => (
            <RecipeCard id={id} title={title} image={image} key={id} />
          ))
        ) : (
          <h1 className="text-center text-red-600 text-xl">
            Loading or no data available
          </h1>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
