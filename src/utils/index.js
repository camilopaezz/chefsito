import Recipes from "./Recipes";
import Suggestions from "./Suggest";

import names from "../names.json";
import recipes from "../db.json";

export const dict = new Suggestions();
dict.addFromArray(names);


export const recipesI = new Recipes();
recipesI.addFromArray(recipes);

