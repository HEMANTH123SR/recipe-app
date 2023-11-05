export const Tags=({searchId})=>{
    return(
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
    )
}

export const IngredientAndAnalyzedInstructions=({searchId})=>{
return (
    <div className="flex flex-row space-x-9 w-full h-96 mt-12">
        {/* Ingredients */}
<div className="h-full w-1/2 bg-slate-100 shadow-lg rounded-xl flex flex-col  ">
<h1 className="text-3xl text-green-600 underline font-bold m-4">Ingredients</h1>
</div>
<div className="h-full w-2 bg-green-500">

</div>
       {/* Instructions */}
<div className="h-full w-1/2 bg-slate-100 shadow-lg rounded-xl flex flex-col">
<h1 className="text-3xl text-green-600 underline font-bold m-4">Instructions</h1>
</div>
    </div>
)
}