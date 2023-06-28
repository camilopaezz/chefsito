import HashTable from "../structures/HashTable";

export default class Recipes {
  constructor() {
    this.recipes = new HashTable(32);
  }

  add(recipe) {
    this.recipes.set(
      recipe.name.toLowerCase().trim().replace(" ", "."),
      recipe
    );
  }

  addFromArray(array) {
    array.forEach((element) => {
      this.add(element);
    });
  }

  search(word) {
    return this.recipes.get(word.toLowerCase().trim().replace(" ", "."));
  }

  searchFromArray(array) {
    const recipes = [];
    array.forEach((element) => {
      recipes.push(this.search(element));
    });
    return recipes;
  }
}