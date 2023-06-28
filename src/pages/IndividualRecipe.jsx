import { useRoute } from "wouter";
import TopBar from "../components/NavBar";
import RecipePreview from "../components/RecipePreview";
import { useEffect, useState } from "react";
import { recipesI } from "../utils";

function IndividualRecipe() {
  const [_, { id }] = useRoute("/recipe/:id");
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    setRecipe(recipesI.search(decodeURI(id)));
  }, [id]);

  return (
    <div className="min-h-full">
      <TopBar back />
      <main className="p-4">
        {recipe.name && <RecipePreview description recipe={recipe} />}
      </main>
    </div>
  );
}

export default IndividualRecipe;
