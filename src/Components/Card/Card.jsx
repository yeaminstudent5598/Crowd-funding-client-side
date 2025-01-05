import { Link } from 'react-router-dom';

const Card = ({ gadget }) => {
    const { product_title, product_image,  price  } = gadget || {};

    return (
        <div className='flex relative'>
            <Link
               
                // transition hover:scale-105
                className=' shadow-xl bg-white rounded-xl overflow-hidden'
            >
                <figure className='p-4 overflow-hidden'>
                    <img className='h-40' src={product_image} alt={product_title} /> 
                </figure>
                <div className='p-4 flex flex-col'>
                    <h1 className='font-bold'>{product_title}</h1> 
                   
                    <p>Price: ${price}</p> 
                    {/* <p>Description: {description}</p>  */}
                    {/* <p>Rating: {rating}</p> */}
                    {/* <p>Availability: {availability ? 'In Stock' : 'Out of Stock'}</p>  */}
                    <div className='flex justify-center mt-4'>
                    <Link to={`/product-details/${gadget.product_id}`} className='btn btn-xs bg-blue-500 rounded-full'>Details</Link>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
