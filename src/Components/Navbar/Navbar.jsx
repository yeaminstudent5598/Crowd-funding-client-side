import { useEffect, useState } from 'react'; // Import useState
import { FaRegHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { getStoredCartList, getStoredWishList } from '../Utility/ProductStorage';



const Navbar = () => {
  const location = useLocation();
 const [addCart, setAddCart] = useState([]);
 const [addWish, setAddWish] = useState([]);

 function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
useEffect(() => {
  const path = capitalizeFirstLetter(
    `${location.pathname} ${
      location.pathname == "/" ? " " : " | "
    } Gadget Heven`.replace("/", "")
  );
  document.title = path;
}, [location.pathname]);


const navigate = useNavigate();

const handleCartNavigate = () => {

  navigate("/dashboard", { state: { value: true } });

}

const handleWishNavigate =()=>{
  navigate("/dashboard", { state: { value: false } });

}





 useEffect(() => {
  // Fetch data from localStorage
  const getData = getStoredCartList();
  setAddCart(getData);

  const getWishData = getStoredWishList();
  setAddWish(getWishData);

  // Listen for cart updates
  const handleCartUpdate = (event) => {
    const newCart = getStoredCartList(); // Refresh cart data from localStorage
    setAddCart(newCart); // Update the cart state
  };

  // Listen for wishlist updates
  const handleWishListUpdate = (event) => {
    const newWishList = getStoredWishList(); // Refresh wishlist data from localStorage
    setAddWish(newWishList); // Update the wishlist state
  };

  // Add event listeners for custom events
  window.addEventListener('cartUpdated', handleCartUpdate);
  window.addEventListener('wishListUpdated', handleWishListUpdate);

  // Clean up event listeners on component unmount
  return () => {
    window.removeEventListener('cartUpdated', handleCartUpdate);
    window.removeEventListener('wishListUpdated', handleWishListUpdate);
  };
}, []);




 const [bgColors, setBgColors] = useState(false);

 console.log(location);
 
 useEffect(() => {
  if(location.pathname == '/' ){
    setBgColors(true)
  }
  else{
    setBgColors(false)
  }
 },[location.pathname])

 
 
  // const [bgColor, setBgColor] = useState("bg-purple-600"); // State for background color
 

  // // Function to change navbar background color
  // const handleButtonClick = (newColor) => {
  //   setBgColor(newColor);
  // };

  return (
    <div className='w-11/12 mx-auto ' >
      <div >
        {/* Navbar Section */}
      <div className={`text-white ${bgColors? "bg-purple-600": ""}  navbar rounded-t-2xl`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <Link className="font-medium btn" to='/' onClick={() => handleButtonClick("bg-[#1f2937]")}>Home</Link>
              <Link className="font-medium" to='statistics' onClick={() => handleButtonClick("bg-[#1f2937]")}>Statistics</Link>
              <Link className="font-medium" to='dashboard' onClick={() => handleButtonClick("bg-[#1f2937]")}>Dashboard</Link>
            </ul>
          </div>
          <a className="btn btn-ghost text-black text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            <Link className={`font-medium btn btn-outline ${
                  location.pathname === '/' ? 'bg-[#1f2937] text-white' : 'bg-transparent text-black'
                }`}
            
               to='/' >Home</Link>
            <Link className={`font-medium btn btn-outline ${
                  location.pathname === '/statistics' ? 'bg-[#1f2937] text-white' : 'bg-transparent text-black'
                }`} to='statistics' >Statistics</Link>
            <Link className={`font-medium btn btn-outline ${
                  location.pathname === '/dashboard' ? 'bg-[#1f2937] text-white' : 'bg-transparent text-black'
                }`} to='dashboard' >Dashboard</Link>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="indicator  flex gap-4">
            <div onClick={handleCartNavigate} className="rounded-full relative text-black btn btn-ghost bg-white p-4 shadow-md flex items-center justify-center">
            <span className='badge text-white bg-green-500 badge-sm absolute -top-1 -right-2'>{addCart.length}</span>
              <div >
             
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              </div>
            </div>
            <div onClick={handleWishNavigate} className="rounded-full relative btn-ghost btn text-black bg-white p-4 shadow-md flex items-center justify-center">
            <span className='badge text-white bg-green-500 badge-sm absolute -top-1 -right-2'>{addWish.length}</span>
              <FaRegHeart  />
            </div>
          </div>
        </div>
      </div>
    
      
      </div>
      
    </div>
  );
};

export default Navbar;
