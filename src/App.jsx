import { Route } from "wouter";
import "./App.css";
import HomePage from "./pages/HomePage";
import Recipe from "./pages/Recipe";
import IndividualRecipe from "./pages/IndividualRecipe";
import Search from "./pages/Search";

function App() {
  return (
    <div className="backgroundP shadow-xl rounded-2xl max-w-[670px] w-full min-h-full min-w-fit">
      <Route path="/" component={HomePage} />
      <Route path="/search" component={Search} />
      <Route path="/recipe" component={Recipe} />
      <Route path="/recipe/:id" component={IndividualRecipe} />
    </div>
  );
}

export default App;
