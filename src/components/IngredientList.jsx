import PropTypes from "prop-types";

function IngredientList(props) {
  const { data, freedom } = props;

  if (freedom) {
    return (
      <ul className="max-w-[620px] grid-cols-3 md:grid-cols-4 grid gap-8 mt-3">
        {data.map((ing) => {
          return (
            <li
              key={ing}
              className="text-[20px] text2 color-[#4a423e] flex flex-col items-center"
            >
              <img
                className="border-4 border-[#707a30] rounded-full max-w-[50px]"
                src="https://picsum.photos/50/50"
                alt={ing}
              />
              {ing}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul
      id="ingredientList"
      className="max-w-[620px] overflow-x-scroll grid grid-flow-col gap-8 mt-3"
    >
      {data.map((ing) => {
        return (
          <li
            key={ing}
            className="text-[20px] text2 color-[#4a423e] flex flex-col items-center"
          >
            <img
              className="border-4 border-[#707a30] rounded-full max-w-[50px]"
              src="https://picsum.photos/50/50"
              alt={ing}
            />
            {ing}
          </li>
        );
      })}
    </ul>
  );
}

IngredientList.propTypes = {
  data: PropTypes.array.isRequired,
  freedom: PropTypes.bool,
};

export default IngredientList;
