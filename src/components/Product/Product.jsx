import { useProduct } from "../../store/ProductContext";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImages";

const Product = () => {
    const products = useProduct();

    return (
        <section className="flex flex-col md:py-16 w-full">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="mb-4 border-b-2 border-black md:flex md:gap-10 justify-center"
                >
                    <ProductImage
                        productImages={product.productImage}
                        className="relative md:max-w-[26rem] md:min-w-[26rem] rounded-xl overflow-clips"
                    />
                    <ProductDescription product={product} />
                </div>
            ))}
        </section>
    );
};

export default Product;
