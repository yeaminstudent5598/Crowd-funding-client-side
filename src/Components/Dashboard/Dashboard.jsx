import React, { useState, useEffect } from 'react';
import { addToStoredCartList, getStoredCartList, getStoredWishList } from '../Utility/ProductStorage';
import data from '../../../public/AllCategories.json'
import { useLocation } from 'react-router-dom';
import { tostMessage } from '../Utility/toastMassage';

import { useNavigate } from 'react-router-dom';
import SuccessModal from '../SuccessModal/SuccessModal';


const Dashboard = () => {
    console.log(data);
    const [activeTab, setActiveTab] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [wishListItems, setWishListItems] = useState([]);
    const [sortedCartItems, setSortedCartItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [totalCost, setTotalCost] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();


    const { value } = location.state || {};

 useEffect(()=>{
   setActiveTab(value)
 },[value])
    useEffect(() => {
       
        // setCartItems(getStoredCartList());
        const addStoredCard = getStoredCartList();
        const filter = addStoredCard.map(localId => data.find(data => data.product_id == localId))
        setCartItems(filter);
            const addWishCard = getStoredWishList();
            const filterTwo =  addWishCard.map(localId => data.find(data => data.product_id == localId))
            setWishListItems(filterTwo);
    }, []);

    useEffect(() => {
        
        const total = cartItems.reduce((sum, item) => sum + item.price, 0);
        setTotalCost(total);
        setSortedCartItems(cartItems); 
    }, [cartItems]);

    const handleSortByPrice = () => {
        const sorted = [...sortedCartItems].sort((a, b) => b.price - a.price);
        setSortedCartItems(sorted);
    };


    const handleRemoveCart = (id) => {
        const wishListData = getStoredWishList();
    
        
        const filterData = wishListData.filter((item, index) => item !== id || index !== wishListData.indexOf(id));
    
      
        localStorage.setItem('Wish-List', JSON.stringify(filterData));
    
       
        const wNewData = filterData.map(localId => data.find(item => item.product_id === localId));
    
     
        setWishListItems(wNewData);
        tostMessage("Product Removed From Wish List", "error");
    };
    const handleRemoveWish = (id) => {
        const cartRomove = getStoredCartList();
    
   
        const filterDataCart = cartRomove.filter((item, index) => item !== id || index !== cartRomove.indexOf(id));
    
        localStorage.setItem('Cart-List', JSON.stringify(filterDataCart));

        const wNewData = filterDataCart.map(localId => data.find(item => item.product_id === localId));
  
        setCartItems(wNewData);
        tostMessage("Product Removed From Cart List", "error");
    };
    


    const handlePurchase = () => {
        console.log('Purchase button clicked. Show modal:', showModal);
        setShowModal(true);
    };


    const handleCloseModal = () => {
        localStorage.removeItem('Cart-List');
        setCartItems([]);
        setWishListItems([]);
        setShowModal(false);
        navigate('/');
        localStorage.removeItem('cart');
        window.dispatchEvent(new CustomEvent('cartUpdated'));
        window.dispatchEvent(new CustomEvent('wishListUpdated'));
    };
    

    const handleAddCartList = (id) => {
        addToStoredCartList(id);
        const event = new CustomEvent('cartUpdated', { detail: id });
        window.dispatchEvent(event);
        tostMessage("Product Added From Wish List", "success");
      };






    return (
        <div className="flex flex-col items-center w-11/12 mx-auto">
            {/* Dashboard Header */}
            <div className="hero-section bg-purple-600 text-white flex flex-col items-center justify-center text-center px-4 py-10 sm:px-8 sm:py-16 lg:px-40 lg:py-20">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="mt-2 text-sm">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>

                {/* Tab Buttons */}
                <div className="flex justify-center gap-4 mt-6">
                    <button
                        onClick={() => setActiveTab(true)}
                        className={`py-2 px-6 rounded-full font-semibold ${activeTab ? 'bg-white text-purple-600' : 'text-white border border-white'}`}
                    >
                        Cart
                    </button>
                    <button
                        onClick={() => setActiveTab(false)}
                        className={`py-2 px-6 rounded-full font-semibold ${!activeTab ? 'bg-white text-purple-600' : 'text-white border border-white'}`}
                    >
                        Wish List
                    </button>
                </div>
            </div>
                

            {/* Cart Summary Section (only visible when Cart tab is active) */}
            {activeTab  ?  <div className="w-full rounded-lg lg:flex py-32 items-center justify-between gap-4">
                    <h2 className="text-lg font-semibold text-black">Cart</h2>

                    <div className="lg:flex items-center gap-6">
                        <span className="text-lg font-bold text-black">Total cost: ${totalCost.toFixed(2)}</span>

                        <button onClick={handleSortByPrice} className="btn border-2 border-primary px-5 rounded-full font-bold text-primary">
                            Sort by Price
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1-3a1 1 0 100-2h8a1 1 0 100-2H6a1 1 0 000 2h8zM4 12h2a1 1 0 100-2H4a1 1 0 100 2zm4 0h8a1 1 0 100-2H8a1 1 0 000 2z" />
                            </svg>
                        </button>

                        {showModal && <SuccessModal onClose={handleCloseModal} totalCost={totalCost}  />}




                        <button onClick={handlePurchase} className="text-white btn px-8 font-bold rounded-full bg-primary">Purchase</button>
                    </div>
                </div> :  (
  // Wishlist Section with same layout and styles as Cart
  <div className="w-full rounded-lg flex py-32 items-center justify-between gap-4">
    <h2 className="text-lg font-semibold text-black">Wishlist</h2>
    <div className="flex items-center gap-6">
      <span className="text-lg font-bold text-black">Total Wishlist Items: {wishListItems.length}</span>
      {/* Additional buttons or actions specific to the Wishlist can go here if needed */}
    </div>
  </div>
)}

            {/* Item List Display */}
            <div>

                {(activeTab ? sortedCartItems : wishListItems).map((item, index) => (
                    
                  
                        <div key={index} className="bg-white wrap rounded-xl flex gap-5 mb-5">
                        <div className=" py-5">
                            <img className="w-48  rounded-lg" src={item.product_image} alt={item.product_title} />
                        </div>
                        <div className="flex gap-3 flex-col py-5 flex-grow">
                            <div className="flex justify-between gap-5">
                                <h4 className="font-bold text-xl">{item.product_title}</h4>
                                <div>
                                <svg onClick={activeTab ? () => handleRemoveWish(item.product_id) : () => handleRemoveCart(item.product_id)}

                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 1024 1024"
                                    fillRule="evenodd"
                                    className="text-2xl text-red-300 cursor-pointer hover:text-red-600 transition-all duration-300"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372Zm128.013 198.826c.023.007.042.018.083.059l45.02 45.019c.04.04.05.06.058.083a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082L557.254 512l127.861 127.862a.268.268 0 0 1 .05.06l.009.023a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082l-45.019 45.02c-.04.04-.06.05-.083.058a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059L512 557.254 384.14 685.115c-.042.041-.06.052-.084.059a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059l-45.02-45.019c-.04-.04-.05-.06-.058-.083a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082L466.745 512l-127.86-127.86a.268.268 0 0 1-.05-.061l-.009-.023a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082l45.019-45.02c.04-.04.06-.05.083-.058a.118.118 0 0 1 .07 0c.022.007.041.018.082.059L512 466.745l127.862-127.86c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path>
                                </svg>
                                </div>
                            </div>
                            <small><span className="font-bold">Description: </span>{item.description}</small>
                            <p className="font-bold">Price: ${item.price}</p>

                            {!activeTab && <button onClick={() => handleAddCartList(item.product_id)} className="btn w-full sm:w-[30%] bg-primary text-white font-bold  rounded-full" >Add to Card</button>}
                        </div>
                    </div>

                   
                ))}
            </div>
        </div>
    );
};

export default Dashboard;


