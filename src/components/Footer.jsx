import {FaTwitter,FaGithub} from "react-icons/fa"
import {AiTwotoneApi} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className=" bg-green-600 p-6 text-slate-100 flex justify-center items-center flex-col">
        <div className="w-full">
        <p>
        This project is open-source and freely available for use, modification,
        and distribution. While there is no specific license, we encourage
        responsible and ethical use Please attribute the project and its
        contributors when using or sharing this code If you'd like to
        contribute, please follow our contributing
        guidelines https://github.com/HEMANTH123SR/recipe-app/blob/main/CONTRIBUTING.md
        We appreciate your support and collaboration!
      </p>
        </div>
  <h1 className="mt-4 mb-2 font-bold underline">Social</h1>
<div className="flex space-x-10">
<FaTwitter/>
<FaGithub/>
<AiTwotoneApi/>
</div>
    </footer>
  );
};

export default Footer;
