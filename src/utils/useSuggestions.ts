import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSuggestions = (query: string, length: number = 6) => {
  const q = query.trim();
  const { data, error, isLoading } = useQuery({
    queryKey: [q],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/autocomplete?apiKey=${
          import.meta.env.VITE_API_KEY
        }&query=${q}&number=${length}`,
      );
      return response.data;
    },
  });
  if (q.length < 3) return { data: null, error: null, isLoading: false };
  return { data, error, isLoading };
};

export default useSuggestions;
