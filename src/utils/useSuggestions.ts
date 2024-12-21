import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSuggestions = (query: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: [query],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/autocomplete?apiKey=${
          import.meta.env.VITE_API_KEY
        }&query=${query}&number=6`,
      );
      return response.data;
    },
  });
  return { data, error, isLoading };
};

export default useSuggestions;
