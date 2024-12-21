import axios from "axios";
import { useEffect, useState } from "react";

const Error = () => {
  const [imgSrc, setImgSrc] = useState<string>("");
  const title = "404 - Page not found | Recetté";
  document.title = title;
  useEffect(() => {
    axios
      .get("https://foodish-api.com/api/")
      .then((res) => res.data.image)
      .then((res) => setImgSrc(res));
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-4">
      <img
        src={imgSrc}
        alt="random"
        className="object-cover w-1/2 border-4 rounded-full shadow-lg h-1/2 border-primary"
      />
      <div className="text-center">
        <h1 className="font-black text-7xl">404</h1>
        <p className="text-2xl">Page not found</p>
      </div>
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 rounded-lg shadow-md cursor-pointer bg-emphasize/70 hover:bg-emphasize transition-all duration-300 hover:shadow-lg"
      >
        Go back
      </button>
    </div>
  );
};

export default Error;
