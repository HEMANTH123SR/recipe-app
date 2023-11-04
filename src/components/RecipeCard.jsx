const RecipeCard = ({ id, title, image }) => {
    return (
      <div className="h-64 w-60 bg-green-600 shadow-lg rounded-xl m-4">
        <img src={image} className="rounded-t-xl" alt={title} />
        <div className="p-2">
          <p className="text-white font-bold">{title}</p>
        </div>
      </div>
    );
  };
  
  export default RecipeCard;
  

