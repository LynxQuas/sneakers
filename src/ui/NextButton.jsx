/* eslint-disable react/prop-types */
import next from "../assets/images/icon-next.svg";
const NextButton = ({ onNextClick, fromModel }) => {
    return (
        <div
            onClick={onNextClick}
            className={`flex justify-center items-center absolute  bg-white w-10 h-10 rounded-full cursor-pointer  ${
                fromModel
                    ? "top-[40%] right-[5%] "
                    : "md:hidden top-[50%] right-[5%]"
            }`}
        >
            <img src={next} alt="next button" />
        </div>
    );
};

export default NextButton;
