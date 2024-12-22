import { Link, useSearchParams } from "react-router";
import Nav from "../components/Nav";
import useSuggestions from "../utils/useSuggestions";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const results = useSuggestions(query!, 16);
  return (
    <div>
      <Nav />
      <div className="p-4">
        <h1 className="text-4xl">Search</h1>
        <p className="text-lg text-gray-500">
          Showing results for <span className="font-bold">{query}</span>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        {results.data?.map(
          (result: { id: number; title: string; imageType: string }) => (
            <Link
              key={result.id}
              to={`/recipes/${result.id}`}
              className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white/80 rounded-xl"
            >
              <img
                src={`https://img.spoonacular.com/recipes/${result.id}-480x360.${result.imageType}`}
                alt={result.title}
                className="md:w-1/2 object-cover rounded-lg"
              />
              <div>
                <h2 className="text-2xl">{result.title}</h2>
                <p className="text-gray-500">View now &gt;</p>
              </div>
            </Link>
          ),
        )}
      </div>
    </div>
  );
};

export default Search;
