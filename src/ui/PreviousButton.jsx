/* eslint-disable react/prop-types */
import previous from "../assets/images/icon-previous.svg";
const PreviousButton = ({ onPreviousClick, fromModel }) => {
    return (
        <div
            onClick={onPreviousClick}
            className={`flex justify-center items-center absolute top-[50%] bg-white w-10 h-10 rounded-full cursor-pointer  ${
                fromModel
                    ? "top-[40%] left-[5%] "
                    : "md:hidden top-[50%] left-[5%]"
            }`}
        >
            <img src={previous} />
        </div>
    );
};

export default PreviousButton;
