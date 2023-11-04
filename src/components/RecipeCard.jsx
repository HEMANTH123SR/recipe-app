import { useNavigate } from "react-router-dom";

const RecipeCard = ({ id, title, image }) => {
  const navigate=useNavigate()
  const handleClick=()=>{
navigate(`/detailCard/${id}`)
  }
  
  return (
      <div className="h-64 w-60 bg-green-600 shadow-lg rounded-xl m-4" onClick={handleClick} onMouseEnter={()=> document.body.style.cursor = 'pointer'} onMouseLeave={()=> document.body.style.cursor = 'default'}>
        <img src={image} className="rounded-t-xl" alt={title} />
        <div className="p-2">
          <p className="text-white font-bold">{title}</p>
        </div>
      </div>
    );
  };
  
  export default RecipeCard;
  

