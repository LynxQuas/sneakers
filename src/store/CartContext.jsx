/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const INITIAL_STATE = [];

const CartContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "cart/add":
            const newItem = action.payload;
            const cart = state;

            const existingItem = cart.find((cart) => cart.id === newItem.id);

            if (existingItem) {
                const updatedItem = cart.map((cart) =>
                    cart.id === newItem.id
                        ? { ...cart, amount: +cart.amount + +newItem.amount }
                        : cart
                );

                return updatedItem;
            } else {
                return [newItem, ...state];
            }

        case "cart/remove":
            const removeItem = action.payload;

            if (removeItem.amount > 1) {
                const reduceAmount = state.map((item) =>
                    item.id === removeItem.id
                        ? { ...item, amount: item.amount - 1 }
                        : item
                );

                return reduceAmount;
            }

            return state.filter((product) => product.id !== action.payload.id);
    }
    return state;
};

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const value = useContext(CartContext);
    return value;
};

export default CartContextProvider;
