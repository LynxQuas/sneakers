/* eslint-disable react/prop-types */
import AddProduct from "./AddProduct";

const ProductDescription = ({ product }) => {
    const discountPrice = (product.discount / 100) * product.price;

    return (
        <div className="flex flex-col gap-4 md:gap-8 px-4 py-8 md:w-[30rem]">
            <h1 className="text-amber-600 tracking-widest font-bold">
                {product.company.toUpperCase()}
            </h1>

            <h2 className="text-3xl font-bold">{product.title}</h2>

            <p className="leading-7 text-[17px] font-sans text-stone-500">
                {product.description}
            </p>

            <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                    <span className="text-2xl font-bold">
                        ${discountPrice.toFixed(2)}
                    </span>
                    <span
                        className="text-xl text-amber-500 font-bold 
                    bg-paleOrange px-2 py-1 rounded-md"
                    >
                        {product.discount}%
                    </span>
                </div>

                <div>
                    <span className="font-bold text-stone-400 line-through text-xl">
                        ${product.price.toFixed(2)}
                    </span>
                </div>
            </div>
            <AddProduct product={product} />
        </div>
    );
};

export default ProductDescription;
