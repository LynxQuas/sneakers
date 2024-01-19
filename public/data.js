import productImage1 from "../src/assets/images/image-product-1.jpg";
import productImage2 from "../src/assets/images/image-product-2.jpg";
import productImage3 from "../src/assets/images/image-product-3.jpg";
import productImage4 from "../src/assets/images/image-product-4.jpg";

const products = [
    {
        id: "001",
        company: "sneaker company",
        title: "Fall Limited Edition Sneakers",
        description:
            "These low-profile snakers are your perfect casual wear companion.Featuring a durable rubber outer sole, the'll withstand everything the weathe can offer.",
        discount: 50,
        price: 250,
        productImage: [
            productImage1,
            productImage2,
            productImage3,
            productImage4,
        ],
    },

    {
        id: "002",
        company: "sneaker company",
        title: "Fall Limited Edition Sneakers",
        description:
            "These low-profile snakers are your perfect casual wear companion.Featuring a durable rubber outer sole, the'll withstand everything the weathe can offer.",
        discount: 50,
        price: 250,
        productImage: [productImage1, productImage2, productImage3],
    },
];

export default products;
