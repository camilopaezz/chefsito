import { Link } from "wouter";
import TopBar from "../components/NavBar";
import RecipePreview from "../components/RecipePreview";
import { recipesI } from "../utils";

const all = recipesI.recipes.getValues();

function Recipe() {
  return (
    <div>
      <TopBar back />
      <ul className="p-4">
        {all.map((recipe) => {
          return (
            <Link key={recipe.key} href={"/recipe/" + recipe.name}>
              <a>
                <RecipePreview key={recipe.key} compact recipe={recipe} />;
              </a>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Recipe;
