import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";



const MainLayOut = () => {
    return (
        <div>
            {/* navbar */}
       <Navbar/>
       
            <div className='min-h-[calc(100vh-284px)] pb-12'>{/* dynamic section */}
            <Outlet/>
            </div>

            {/* footer section */}
            
            <ToastContainer />
            <Footer/>

        </div>
    );
};

export default MainLayOut;