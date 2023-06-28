import PropTypes from "prop-types";
import IngredientList from "./IngredientList";

function RecipePreview(props) {
  const { recipe, compact, description } = props;

  if (description) {
    return (
      <div className="w-full h-min cursor-pointer">
        <p className="text-[35px] max-w-[620px] mb-2 font-bold">
          {recipe.name}
        </p>
        <img
          className="mb-9 border-[#4a423e] border-4 rounded-2xl w-full h-[350px] object-cover"
          src={recipe.img}
          alt=""
        />
        <IngredientList data={recipe.ingredients} />
        {description && (
          <p className="mt-8 text-[22px] mb-8 max-w-[625px] forzar text-justify">
            {recipe.description}
          </p>
        )}
      </div>
    );
  }

  if (compact) {
    return (
      <div className="w-full h-min cursor-pointer">
        <p className="text-[35px] text2 mb-2">{recipe.name}</p>
        <img
          className="rounded-full mb-1 border-[#4a423e] border-4 w-full h-[150px] object-cover"
          src={recipe.img}
          alt=""
        />
      </div>
    );
  }

  return (
    <div className="w-full h-min cursor-pointer">
      <p className="text-[35px] mb-12">{recipe.name}</p>
      <img
        width="100%"
        className="mb-9 border-[#4a423e] border-4 rounded-2xl w-full h-[350px] object-cover"
        src={recipe.img}
        alt=""
      />
      <IngredientList slice={4} data={recipe.ingredients} />
    </div>
  );
}

RecipePreview.propTypes = {
  recipe: PropTypes.object,
  compact: PropTypes.bool,
  description: PropTypes.bool,
};

export default RecipePreview;
