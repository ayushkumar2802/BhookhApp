// Views/HomeView.tsx
import React, { useEffect, useState } from "react";
import { RecipeController } from "../Controllers/RecipeController";
import RecipeCard from "./RecipeCard";

const HomeView: React.FC = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const recipeController = new RecipeController();

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const fetchedRecipes = await recipeController.getRecipes();
        setRecipes(fetchedRecipes);
      } catch (err) {
        setError("Failed to load recipes.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default HomeView;
