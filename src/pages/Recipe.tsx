import { Link, useParams } from "react-router";
import useRecipeInfo from "../utils/useRecipeInfo";
import Markdown from "markdown-to-jsx";

const Recipe = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useRecipeInfo(id);
  return (
    <div className="flex flex-col min-h-screen p-6 gap-6 bg-secondary">
      <button
        onClick={() => window.history.back()}
        className="flex items-center justify-center w-12 h-12 p-4 bg-white rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className=""
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M5 12l6 6" />
          <path d="M5 12l6 -6" />
        </svg>
      </button>
      {!error && !isLoading && data && (
        <>
          <div className="flex w-full items-start min-[28rem]:items-center justify-between gap-4 flex-col min-[28rem]:flex-row-reverse">
            <img
              src={data.image}
              alt="avatar"
              className="w-1/2 shadow-lg hidden min-[28rem]:block rounded-xl"
            />
            <div className="flex flex-col max-w-1/2 gap-4">
              <div className="text-5xl">{data.title}</div>
              <div className="text-3xl">
                <span className="p-1 mr-2 rounded-full bg-tertiary"></span>
                {data.nutrition.nutrients[0].amount}
                <span className="text-base">
                  {data.nutrition.nutrients[0].unit}{" "}
                  <span className="text-base text-gray-500">
                    {data.nutrition.nutrients[0].name}
                  </span>
                </span>
              </div>
              <div className="text-3xl">
                <span className="p-1 mr-2 rounded-full bg-blue-400/60"></span>
                {data.nutrition.nutrients[10].amount}
                <span className="text-base">
                  {data.nutrition.nutrients[10].unit}{" "}
                  <span className="text-gray-500">
                    {data.nutrition.nutrients[10].name}
                  </span>
                </span>
              </div>
              <div className="text-3xl">
                <span className="p-1 mr-2 rounded-full bg-primary"></span>
                {data.nutrition.nutrients[3].amount}
                <span className="text-base">
                  {data.nutrition.nutrients[3].unit}{" "}
                  <span className="text-gray-500">
                    {data.nutrition.nutrients[3].name}
                  </span>
                </span>
              </div>
              <div className="text-3xl">
                <span className="p-1 mr-2 rounded-full bg-emphasize"></span>
                {data.readyInMinutes}
                <span className="text-base">
                  min <span className="text-gray-500">Ready</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4 bg-white gap-4 rounded-xl">
            <div className="text-2xl">Summary</div>
            <Markdown>{data.summary}</Markdown>
            <hr className="text-gray-300" />
            <div className="text-2xl">Ingredients</div>
            <ul className="grid grid-cols-2 gap-4">
              {data.extendedIngredients.map(
                (ingredient: { id: number; original: string }) => (
                  <li key={ingredient.id} className="flex items-center gap-2">
                    <span className="p-1 rounded-full bg-tertiary"></span>
                    {ingredient.original}
                  </li>
                ),
              )}
            </ul>
            <hr className="text-gray-300" />
            <div className="text-2xl">Instructions</div>
            <Markdown>{data.instructions}</Markdown>
            <div className="leading-10">
              <span className="pr-2">View the full instructions on</span>
              <button>
                <Link
                  to={data.sourceUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-4 py-2 rounded-lg shadow-md bg-emphasize/70 hover:bg-emphasize transition-all duration-300 hover:shadow-lg"
                >
                  {data.sourceName}
                </Link>
              </button>
              .
            </div>
            <hr className="text-gray-300" />
          </div>
        </>
      )}
    </div>
  );
};

export default Recipe;
