import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import CartContextProvider from "../store/CartContext";
import ProductContextProvider from "../store/ProductContext";

const AppLayout = () => {
    return (
        <CartContextProvider>
            <ProductContextProvider>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Outlet />
                </main>
            </ProductContextProvider>
        </CartContextProvider>
    );
};

export default AppLayout;
