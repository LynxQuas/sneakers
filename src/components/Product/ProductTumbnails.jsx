/* eslint-disable react/prop-types */
const ProductThumbnails = ({
    productImages,
    currentImageIndex,
    setCurrentImageIndex,
}) => {
    return (
        <div className="hidden md:flex gap-2 my-5 ">
            {productImages.map((image, index) => (
                <div key={image}>
                    <div
                        className={`w-24 bg-black opacity-40 z-10 h-24 ${
                            currentImageIndex === index
                                ? "absolute  rounded-md"
                                : "hidden"
                        } `}
                    />
                    <img
                        src={image}
                        alt="product"
                        className="w-24 rounded-md cursor-pointer hover:brightness-50 "
                        onClick={() => setCurrentImageIndex(index)}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProductThumbnails;
