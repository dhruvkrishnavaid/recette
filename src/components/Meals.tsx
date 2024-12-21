import { useState } from "react";
import { Link } from "react-router";
import useMeals from "../utils/useMeals";

const Meals = () => {
  const [selected, setSelected] = useState<"breakfast" | "lunch" | "dinner">(
    "breakfast",
  );
  const key =
    selected === "breakfast"
      ? "breakfast"
      : selected === "lunch"
      ? "lunch"
      : "dinner";
  const meals = useMeals(key);
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={() => setSelected("breakfast")}
          className={`rounded-xl shadow-lg border text-center py-2 hover:bg-primary/45 border-primary ${
            selected === "breakfast" ? " bg-primary/45" : " bg-primary/20"
          }`}
        >
          Breakfast
        </button>
        <button
          onClick={() => setSelected("lunch")}
          className={`rounded-xl shadow-lg border text-center py-2 hover:bg-primary/45 border-primary ${
            selected === "lunch" ? " bg-primary/45" : " bg-primary/20"
          }`}
        >
          Lunch
        </button>
        <button
          onClick={() => setSelected("dinner")}
          className={`rounded-xl shadow-lg border text-center py-2 hover:bg-primary/45 border-primary ${
            selected === "dinner" ? " bg-primary/45" : " bg-primary/20"
          }`}
        >
          Dinner
        </button>
      </div>
      <div className={`py-4`}>
        {meals.error ? (
          <></>
        ) : meals.isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="grid md:grid-cols-2 gap-4">
            {meals.data?.map(
              (meal: {
                id: number | undefined;
                title: string | undefined;
                image: string | undefined;
              }) => (
                <Link
                  to={`/recipes/${meal.id}`}
                  key={meal.id}
                  className="flex items-center justify-between w-full p-4 shadow-lg bg-white/80 rounded-xl"
                >
                  <div>
                    <h2 className="text-2xl">{meal.title}</h2>
                    <p className="text-gray-500">View now &gt;</p>
                  </div>
                  <img
                    src={meal.image}
                    alt={meal.title}
                    className="w-24 h-24 rounded-xl"
                  />
                </Link>
              ),
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Meals;
