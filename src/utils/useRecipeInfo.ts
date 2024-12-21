import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useRecipeInfo = (id?: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: [`recipe-${id}`],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
          import.meta.env.VITE_API_KEY
        }&includeNutrition=true`,
      );
      return response.data;
    },
  });
  if (!id) {
    return { data: null, error: "No ID specified!", isLoading: false };
  } else {
    return { data, error, isLoading };
  }
};

export default useRecipeInfo;
