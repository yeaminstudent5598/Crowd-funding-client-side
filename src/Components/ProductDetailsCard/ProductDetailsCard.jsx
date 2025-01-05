
import { addToStoredCartList, addToStoredWishList } from '../Utility/ProductStorage';
import { tostMessage } from '../Utility/toastMassage';

import 'react-toastify/dist/ReactToastify.css';


const ProductDetailsCard = ({ data }) => {
  const {product_id,
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating
  } = data;

  const handleAddCartList = (id) => {
    addToStoredCartList(id); 
    const event = new CustomEvent('cartUpdated', { detail: id });
    window.dispatchEvent(event); 
    tostMessage("Product  added to Cart", "success");
  };
  
  const handleAddWishList = (id) => {
    addToStoredWishList(id);
    
    const event = new CustomEvent('wishListUpdated', { detail: id });
    window.dispatchEvent(event);  
    
  };
  
  

  return (
    <div className="relative bottom-20 lg:bottom-40 px-4 sm:px-8">
  <div className="flex flex-col md:flex-row p-6 mx-auto w-full md:w-[80%] lg:w-[65%] border border-gray-300 rounded-lg shadow-lg bg-white">
    <div className="w-full md:w-1/2 bg-white rounded-md mb-4 md:mb-0 mr-0 md:mr-6 flex items-center justify-center overflow-hidden">
      <img src={product_image} alt={product_title} className="max-w-full w-full rounded-xl" />
    </div>
    <div className="w-full md:w-1/2 flex flex-col">
      <h2 className="text-xl md:text-2xl font-semibold">{product_title}</h2>
      <p className="text-lg font-medium text-gray-700 mt-1">Price: ${price.toFixed(2)}</p>
      <p
        className={`text-sm font-semibold mt-1 ${
          availability ? 'text-green-600 rounded-full' : 'text-red-600'
        }`}
      >
        {availability ? 'In Stock' : 'Out of Stock'}
      </p>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <div className="mt-3">
        <h3 className="font-semibold text-md">Specification:</h3>
        <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
          {specification.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-center mt-4">
        <div className="text-yellow-500">
          {'⭐'.repeat(Math.floor(rating))} ({rating})
        </div>
      </div>
      <div className="flex gap-3 mt-5">
        <button onClick={() => handleAddCartList(product_id)}
          className={`px-4 py-2 rounded-md ${
            availability ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!availability}
        >
          Add To Cart
        </button>
        <button onClick={() => handleAddWishList(product_id)} className="text-gray-500 hover:text-gray-700 text-2xl">❤</button>
      </div>
    </div>
  </div>
</div>

  );
};

// ProductList component to render all product cards


export default ProductDetailsCard;
