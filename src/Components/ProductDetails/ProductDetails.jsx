import { useLoaderData, useParams } from "react-router-dom";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";

const ProductDetails = () => {
    const data = useLoaderData();
    const {product_id} = useParams();
    const product = data.find((item) => item.product_id === product_id);

    return (
        <div>
            

<div class="hero-section  bg-purple-600 text-white flex flex-col items-center justify-center text-center  lg:px-40 lg:py-20">
        <div className="pb-[100px]">
        <h1 className="text-3xl font-bold">Product Details</h1>
        <p className="mt-2 text-sm">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
        </div>
        
        {/* Cart and Wishlist Buttons */}
       
       
    </div>
    {product ? (
                <ProductDetailsCard data={product} />
            ) : (
                <p className="text-center mt-6 text-red-500">Product not found.</p>
            )}
        </div>
    );
};

export default ProductDetails;