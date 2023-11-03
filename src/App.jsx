import InputContent from "./components/InputContent"
import Nav from "./components/Nav"
import RecipeCard from "./components/RecipeCard"

const App=()=>{
  return (
  <div>
    <Nav/>
    <div className="p-4">
    <InputContent/>
    <div className="p-5"></div>
    <RecipeCard image={"https://spoonacular.com/recipeImages/715415-312x231.jpg"} title={"Red Lentil Soup with Chicken and Turnips"} id={1}/>
    </div>

  </div>
  )
}

export default App