/* eslint-disable react/prop-types */
import plus from "../../assets/images/icon-plus.svg";

import minus from "../../assets/images/icon-minus.svg";
import { useRef, useState } from "react";
import { useCart } from "../../store/CartContext";

const AddProduct = ({ product }) => {
    const [amount, setAmount] = useState(0);
    const productAmount = useRef();

    const { dispatch } = useCart();

    const handlePlusAmount = () => {
        setAmount((prevAmount) => prevAmount + 1);
    };

    const handleMinusAmout = () => {
        if (amount <= 0) return;

        setAmount((prevAmount) => prevAmount - 1);
    };

    const addToCartHandler = () => {
        const productDetail = {
            id: product.id,
            image: product.productImage[0],
            title: product.title,
            price: (product.discount / 100) * product.price,
            amount: productAmount.current.textContent,
        };

        if (productAmount.current.textContent !== "0") {
            dispatch({ type: "cart/add", payload: productDetail });
        }
    };

    return (
        <div className="w-full md:flex gap-10">
            <div className="w-full md:w-2/3 items-center flex justify-around py-4 bg-slate-100 mb-4 md:mb-0 rounded-lg">
                <div onClick={handleMinusAmout} className="cursor-pointer">
                    <img src={minus} alt="minus button" />
                </div>
                <span className="text-xl font-bold" ref={productAmount}>
                    {amount}
                </span>
                <div onClick={handlePlusAmount} className="cursor-pointer">
                    <img src={plus} alt="plus button" />
                </div>
            </div>

            <button
                className="bg-amber-500 w-full p-4 text-xl text-white rounded-lg shadow-xl shadow-amber-700"
                onClick={addToCartHandler}
            >
                Add to cart
            </button>
        </div>
    );
};

export default AddProduct;
