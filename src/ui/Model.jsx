import { createPortal } from "react-dom";
import ProductImage from "../components/Product/ProductImages";
import closeIcon from "../assets/images/icon-close.svg";

const Model = ({ productImages, onClose }) => {
    return createPortal(
        <div
            id="overlay"
            className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/90"
        >
            <div className="relative w-[30rem]">
                <img
                    src={closeIcon}
                    className="absolute -top-10 right-0 w-6 cursor-pointer"
                    onClick={onClose}
                />
                <ProductImage productImages={productImages} fromModel={true} />
            </div>
        </div>,
        document.getElementById("portal")
    );
};

export default Model;
