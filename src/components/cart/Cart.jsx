import deleteIcon from "../../assets/images/icon-delete.svg";

import { useCart } from "../../store/CartContext";

const Cart = () => {
    const { state: cart, dispatch } = useCart();

    console.log("CART FROM CART", cart);

    return (
        <div className="absolute w-[98%] right-[0%] md:w-[30rem] md:shadow-2xl md:mr-10 my-10 z-10 py-6 mx-1 bg-white rounded-lg">
            {/* Cart Header */}
            <div className="border-b-2 border-gray-100 w-full px-8 pb-8">
                <span className="text-xl font-bold">Cart</span>
            </div>

            {/* CART ITEMS  */}
            {!cart.length && (
                <h1 className="text-center py-6">Your Cart is empty.</h1>
            )}
            {cart.map((cart) => (
                <div
                    key={cart.id}
                    className="px-8 py-7 flex gap-7 text-stone-400"
                >
                    <img
                        src={cart.image}
                        width="50"
                        height="20"
                        className="rounded-lg"
                    />
                    <div className="flex flex-col">
                        <span>{cart.title}</span>
                        <span>
                            ${cart.price.toFixed(2)} x {cart.amount}{" "}
                            <b className="text-black">
                                ${(cart.price * cart.amount).toFixed(2)}
                            </b>
                        </span>
                    </div>

                    <div className="self-center cursor-pointer">
                        <img
                            src={deleteIcon}
                            id="deleteIcon"
                            onClick={() =>
                                dispatch({ type: "cart/remove", payload: cart })
                            }
                        />
                    </div>
                </div>
            ))}

            {/* CART FOOTER  */}
            <button className="bg-amber-600 font-bold text-xl py-4 px-5 rounded-xl text-stone-200 mx-8">
                Checkout
            </button>
        </div>
    );
};

export default Cart;
