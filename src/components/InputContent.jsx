import { useState } from "react";
import {BiSearch} from "react-icons/bi"
const InputContent = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div
      style={{
        backgroundImage:
          "url('https://virginiawillis.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/09/pecan-waffles-1536x1024.jpeg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-96 rounded-lg flex justify-center items-center"
    >
     
      <div className="relative flex items-center shadow-lg rounded-lg">
        <input type="text" placeholder="Search Recipes..."
        className="pl-12 pr-4 py-4 w-80 rounded-lg border border-gray-300 text-xl"
        value={searchInput}
        onChange={(e)=>setSearchInput(e.target.value)}
        />
<BiSearch className="absolute left-3 w-7 h-7 text-gray-400 "/>
      </div>
    </div>
  );
};

export default InputContent;

//  backgroundRepeat:"no-repeat"
// bg-slate-300 rounded-lg flex items-center h-14 w-44 px-2