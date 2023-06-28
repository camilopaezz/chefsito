import { useEffect, useState } from "react";
import Glass from "../assets/magnifying-glass-solid.svg";
import RecipePreview from "./RecipePreview";
import { Link } from "wouter";
import { dict, recipesI } from "../utils";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (search.length > 0) {
      setSuggest(dict.suggestWords(search));
    } else {
      setSuggest([]);
    }
  }, [search]);

  useEffect(() => {
    if (suggest.length > 0) {
      setRecipes(recipesI.searchFromArray(suggest));
    }
  }, [suggest]);

  return (
    <div>
      <form className="mt-10 h-16 grid grid-cols-8">
        <input
          className="place bg-[#ab9a6e] border-[#4a423e] border-[4px] box-content rounded-s-xl max-h-[inherit] col-start-1 col-end-8"
          type="text"
          defaultValue={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar..."
        />
        <button className="flex justify-center items-center max-h-[inherit] rounded-e-xl bg-[#4a423e]">
          <img className="max-h-10" src={Glass} alt="" />
        </button>
      </form>
      <div className="h-[400px]">
        {suggest &&
          suggest
            .slice(0, suggest.length <= 5 ? suggest.length : 5)
            .map((word) => (
              <div
                key={word}
                className=" p-3 text-[1.3rem] m-1 bg-[#ab9a6e] border-[#4a423e] border-[4px] box-content"
              >
                {word}
              </div>
            ))}
      </div>
      <div>
        {recipes.map((recipe) => (
          <Link href={"/recipe/" + recipe.name} key={recipe.key}>
            <a>
              <RecipePreview compact recipe={recipe} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
