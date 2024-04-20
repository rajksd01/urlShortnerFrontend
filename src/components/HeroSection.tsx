import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { FaRegCopy } from "react-icons/fa";

function HeroSection() {
  const [originalUrl, setOriginalUrl] = useState<string>("");
  const [shortenUrl, setShortenUrl] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setOriginalUrl(e.target.value);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await axios.post(`http://localhost:3000/url`, {
      url: originalUrl,
    });
    console.log("resultdata", result.data.id);
    setShortenUrl(`http://localhost:3000/${result.data.id}`);
    console.log("shortenURL:", shortenUrl);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenUrl);
  };

  return (
    <div className="h-[100vh] w-[100vw] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 flex items-center justify-center overflow-hidden">
      <div className="  absolute w-[70%] h-[70%] bg-transparent rounded-lg p-6  bg-blend-soft-light	 shadow-2xl drop-shadow-2xl  ">
        <h2 className="text-3xl p-2 mb-8 font-bold text-orange-400">
          Shorten Your URL{" "}
        </h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="originalUrl"
            value={originalUrl}
            onChange={handleInputChange}
            placeholder="Type or Paste your URL"
            className="p-5 w-[80%] rounded-lg outline-dashed "
          />
          <input
            type="submit"
            name="originalUrl"
            value="Shorten"
            className="  p-5  bg-white ml-2 min-[980px]:ml-6 rounded-lg outline-dashed mt-4 min-[730px]:m-0 hover:bg-orange-500 duration-300"
          />
        </form>
        <div
          className={`w-[94%] bg-gray-300 my-4 rounded-md flex ${
            shortenUrl !== "" ? "block" : "hidden"
          }`}
        >
          <p className="p-4 "> {shortenUrl} </p>
          <FaRegCopy
            className="h-12 mt-1 ml-auto mr-5 transform active:scale-75 transition-transform"
            onClick={copyToClipboard}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
