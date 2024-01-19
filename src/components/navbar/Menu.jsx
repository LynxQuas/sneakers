/* eslint-disable react/prop-types */
import closeMenu from "../../assets/images/icon-close.svg";
import OverLay from "../../ui/OverLay";
import MenuItems from "./MenuItems";
const Menu = ({ onCloseMenu }) => {
    return (
        <>
            <OverLay />
            <div className="bg-white w-[80%] h-screen z-50 fixed top-0 left-0 flex flex-col gap-8 px-10 py-5 animate-slideIn">
                <img
                    src={closeMenu}
                    alt=""
                    width="20"
                    height="20"
                    onClick={onCloseMenu}
                />

                <MenuItems className="flex flex-col gap-2 text-xl" />
            </div>
        </>
    );
};

export default Menu;
