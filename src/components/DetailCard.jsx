import { useLocation } from "react-router-dom";

const DetailCard=()=>{
    const location=useLocation()
    const recipeId=location.pathname.split("/")[2]
    console.log(recipeId)
    return(
        <div>
            <h1>hello world yo {recipeId}</h1>
        </div>
    )
}

export default DetailCard;