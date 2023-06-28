import Utensils from "../assets/utensils-solid.svg";
import Arrow from "../assets/arrow-left-solid.svg";
import PropTypes from "prop-types";
import { Link } from "wouter";

function TopBar(props) {
  const { back, className } = props;

  const handleBack = () => {
    window.history.back();
  };

  if (back) {
    return (
      <div className="min-h-full">
        <div
          className={
            className +
            "box-content min-h-[100px] flex items-center shadow-lg px-5"
          }
        >
          <h1 className="text1 h-min text-[50px] flex leading-normal">
            <div
              onClick={handleBack}
              className="cursor-pointer bg-[#4a423e] grid place-content-center self-center w-[60px] h-[60px] mr-4 rounded-full"
            >
              <img className="w-6" src={Arrow} alt="" />
            </div>
            <Link href={"/"}>
              <a className="flex">
                Chefsito
                <img className="w-10" src={Utensils} alt="" />
              </a>
            </Link>
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="box-content flex gap-6 items-center shadow-lg px-5 ">
      <h1 className="text1 h-min text-[50px] leading-normal">Chefsito</h1>
      <img className="w-10" src={Utensils} alt="" />
    </div>
  );
}

TopBar.propTypes = {
  back: PropTypes.bool,
  className: PropTypes.string,
};

export default TopBar;
