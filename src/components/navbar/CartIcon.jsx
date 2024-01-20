import { useEffect, useState } from "react";
import cartIcon from "../../assets/images/icon-cart.svg";
import Cart from "../cart/Cart";
import { useCart } from "../../store/CartContext";

const CartIcon = () => {
    const [openCart, setOpenCart] = useState(false);
    const { state: cart } = useCart();

    useEffect(() => {
        document.addEventListener("click", (event) => {
            if (
                event.target.id === "cartIcon" ||
                event.target.id === "deleteIcon"
            ) {
                return;
            } else {
                setOpenCart(false);
            }
        });
    }, []);

    return (
        <div>
            <div className="relative">
                <img
                    src={cartIcon}
                    className="cursor-pointer"
                    width="30"
                    id="cartIcon"
                    height="30"
                    alt="cart icon"
                    onClick={() => setOpenCart((prev) => !prev)}
                />
                {cart.length > 0 && (
                    <div className="absolute w-6 h-6 bg-stone-300 flex top-[-80%] left-[70%] rounded-full ">
                        <span className="text-red-600 font-bold ml-2">
                            {cart.length}
                        </span>
                    </div>
                )}
            </div>

            {openCart && <Cart />}
        </div>
    );
};

export default CartIcon;
