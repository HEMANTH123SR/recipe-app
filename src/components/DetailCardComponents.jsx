export const Tags = ({ searchId }) => {
  return (
    <div className="mt-10 flex flex-row space-x-6">
      <h4
        className={`p-3 rounded-2xl font-semibold text-slate-200 shadow-xl ${
          searchId.glutenFree ? "bg-green-600" : "bg-red-600"
        }`}
      >
        Gluten Free
      </h4>
      <h4
        className={`p-3 rounded-2xl font-semibold text-slate-200 shadow-xl   ${
          searchId.vegan ? "bg-green-600" : "bg-red-600"
        }`}
      >
        Vegan
      </h4>
      <h4
        className={`p-3 rounded-2xl font-semibold text-slate-200  shadow-xl ${
          searchId.vegetarian ? "bg-green-600" : "bg-red-600"
        }`}
      >
        Vegetarian
      </h4>
      <h4
        className={`p-3 rounded-2xl font-semibold text-slate-200  shadow-xl ${
          searchId.veryHealthy ? "bg-green-600" : "bg-red-600"
        }`}
      >
        Very Healthy
      </h4>

      <h4
        className={`p-3 rounded-2xl font-semibold text-slate-200  shadow-xl ${
          searchId.dairyFree ? "bg-green-600" : "bg-red-600"
        }`}
      >
        Dairy Free
      </h4>
    </div>
  );
};

export const IngredientAndAnalyzedInstructions = ({ searchId }) => {
  return (
    <div className="flex flex-col space-x-9 w-full  mt-12">
      {/* Ingredients */}
      <div className="h-full  bg-slate-100 shadow-lg rounded-xl flex flex-col items-center   pb-3">
        <h1 className="text-3xl text-green-600 underline font-bold m-8">
          Ingredients
        </h1>
        <div className="grid grid-cols-2 w-4/5 ">

      
        {searchId.extendedIngredients &&
        searchId.extendedIngredients.length > 1 ? (
          searchId.extendedIngredients.map((data) => {
            return (
              <div className="flex flex-col w-3/4 bg-slate-200 shadow-sm rounded-md p-3 m-3 ">
                <h1 className="text-lg text-green-600 font-semibold">
                  {data.name.toUpperCase()}
                </h1>
                <p className="text-green-500">{data.original}</p>
              </div>
            );
          })
        ) : (
          <h1>Error Ocuured with Extended Ingredients </h1>
        )}
          </div>
      </div>
     <div className="m-7"></div>
      {/* Instructions */}
      <div className="h-full bg-slate-100 shadow-lg rounded-xl flex flex-col items-center   pb-3" style={{margin:0}}>
        <h1 className="text-3xl text-green-600 underline font-bold m-8">
          Instructions
        </h1>
        
        <div className="grid grid-cols-2 w-4/5">
        {searchId.analyzedInstructions  ? (
          searchId.analyzedInstructions[0].steps.map((data) => {
            return (
              <div className="flex flex-col w-3/4 bg-slate-200 shadow-sm rounded-md p-3 m-3 ">
                <h1 className="text-lg text-green-600 font-semibold">
                  Step {data.number}
                </h1>
                <p className="text-green-500">{data.step}</p>
              </div>
            );
          })
        ) : (
          <div>Error something went wrong with analyzed instructions </div>
        )}
        </div>
      </div>
    </div>
  );
};
