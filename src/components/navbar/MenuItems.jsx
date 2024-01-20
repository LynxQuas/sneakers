import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const MenuItems = ({ className }) => {
    const activeLink = ({ isActive }) =>
        isActive ? "md:py-10 md:border-b-4 md:border-amber-400" : "";

    return (
        <ul className={`${className} h-full`}>
            <li className="py-2">
                <NavLink
                    to="/"
                    className={(isActive) => activeLink(isActive)}
                    end
                >
                    Collection
                </NavLink>
            </li>
            <li className="py-2">
                <NavLink
                    to="/men"
                    className={(isActive) => activeLink(isActive)}
                    end
                >
                    Men
                </NavLink>
            </li>
            <li className="py-2">
                <NavLink
                    to="/women"
                    className={(isActive) => activeLink(isActive)}
                    end
                >
                    Women
                </NavLink>
            </li>
            <li className="py-2">
                <NavLink
                    to="/about"
                    className={(isActive) => activeLink(isActive)}
                    end
                >
                    About
                </NavLink>
            </li>
            <li className="py-2">
                <NavLink
                    to="/contact"
                    className={(isActive) => activeLink(isActive)}
                    end
                >
                    Contact
                </NavLink>
            </li>
        </ul>
    );
};

export default MenuItems;
