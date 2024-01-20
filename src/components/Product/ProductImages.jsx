/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import NextButton from "../../ui/NextButton";
import PreviousButton from "../../ui/PreviousButton";
import ProductThumbnails from "./ProductTumbnails";
import Model from "../../ui/Model";

const ProductImage = ({ productImages, className, fromModel }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [viewFullImage, setViewFullImage] = useState(false);

    const hasNext = currentImageIndex < productImages.length - 1;
    const hasPrevious = currentImageIndex !== 0;

    const nextClickHandler = () => {
        hasNext && setCurrentImageIndex((prevIndex) => prevIndex + 1);
    };

    const previousClickHandler = () => {
        hasPrevious && setCurrentImageIndex((prevIndex) => prevIndex - 1);
    };

    const viewFullImageHandler = () => {
        !fromModel && setViewFullImage(true);
    };

    useEffect(() => {
        document.addEventListener("click", (event) => {
            if (event.target.id === "overlay") {
                setViewFullImage(false);
            }
        });
    }, []);

    return (
        <div className={className}>
            <img
                src={productImages[currentImageIndex]}
                className="hidden md:block rounded-xl cursor-pointer"
                alt="product 1"
                onClick={viewFullImageHandler}
            />

            <img
                src={productImages[currentImageIndex]}
                className="md:hidden "
            />
            <ProductThumbnails
                productImages={productImages}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
            />

            {hasNext && (
                <NextButton
                    onNextClick={nextClickHandler}
                    fromModel={fromModel}
                />
            )}

            {hasPrevious && (
                <PreviousButton
                    onPreviousClick={previousClickHandler}
                    fromModel={fromModel}
                />
            )}

            {viewFullImage && (
                <Model
                    productImages={productImages}
                    onClose={() => setViewFullImage(false)}
                />
            )}
        </div>
    );
};

export default ProductImage;
