import { Link } from "wouter";

import RecipePreview from "../components/RecipePreview";

import book from "../assets/book-solid.svg";
import plus from "../assets/square-plus-regular.svg";
import TopBar from "../components/NavBar";
import { recipesI } from "../utils";

import names from "../names.json";
const recipe = recipesI.search(names[Math.floor(Math.random() * names.length)]);

function HomePage() {
  return (
    <div className="gridCamilo min-h-full">
      <TopBar className="row-start-1 row-end-2" />
      <section className="text3 flex flex-col justify-center row-start-2 row-end-[11] p-5">
        <Link href={"/recipe/" + recipe.name}>
          <a>
            <h2 className="text2 text-[41px]">La receta de hoy es:</h2>
            <RecipePreview recipe={recipe} />
          </a>
        </Link>
      </section>
      <nav className="flex justify-around row-start-[11] row-end-[13]">
        <Link href="/recipe">
          <a>
            <div className="grid place-content-center w-[120px] h-[120px] bg-[#4a423e] rounded-full">
              <img className="w-[50px]" src={book} alt="" />
            </div>
          </a>
        </Link>
        <Link href="/search">
          <a>
            <div className="grid place-content-center w-[120px] h-[120px] bg-[#4a423e] rounded-full">
              <img className="w-[50px]" src={plus} alt="" />
            </div>
          </a>
        </Link>
      </nav>
    </div>
  );
}

export default HomePage;
