import Product from "./components/Product/Product";
import Navbar from "./components/navbar/Navbar";
import CartContextProvider from "./store/CartContext";
import ProductContextProvider from "./store/ProductContext";

const App = () => {
    return (
        <CartContextProvider>
            <ProductContextProvider>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Product />
                </main>
            </ProductContextProvider>
        </CartContextProvider>
    );
};

export default App;
