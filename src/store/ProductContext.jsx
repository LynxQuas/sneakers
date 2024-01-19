/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

import PRODUCTS from "../../public/data";

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => {
    const value = useContext(ProductContext);

    return value;
};

export default ProductContextProvider;
