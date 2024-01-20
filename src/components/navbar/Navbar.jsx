import menuIcon from "../../assets/images/icon-menu.svg";
import NavContentContainer from "./NavContentContainer";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Avatar from "./Avatar";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.addEventListener("click", (event) => {
            if (event.target.id === "menuIcon") return;
            setIsMenuOpen(false);
        });
    }, []);

    return (
        <nav className="flex justify-around items-center py-8 relative md:mb-6 md:py-8 md:border-b-2 border-gray-200">
            <NavContentContainer className="flex items-center gap-10">
                <img
                    src={menuIcon}
                    id="menuIcon"
                    className="md:hidden"
                    width="25"
                    height="25"
                    onClick={() => setIsMenuOpen(true)}
                />
                <span className="text-4xl font-bold">
                    <Link to="/">sneakers</Link>
                </span>
                <MenuItems className="md:flex gap-5 text-stone-500 hidden" />
            </NavContentContainer>

            <NavContentContainer className="flex items-center gap-6">
                <CartIcon />
                <Avatar />
            </NavContentContainer>

            {isMenuOpen && <Menu onCloseMenu={() => setIsMenuOpen(false)} />}
        </nav>
    );
};

export default Navbar;
