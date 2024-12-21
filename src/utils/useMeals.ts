import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMeals = (meal: "breakfast" | "lunch" | "dinner") => {
  const { data, error, isLoading } = useQuery({
    queryKey: [meal],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
          import.meta.env.VITE_API_KEY
        }&type=${meal}`,
      );
      return response.data.results;
    },
  });
  return { data, error, isLoading };
};

export default useMeals;
