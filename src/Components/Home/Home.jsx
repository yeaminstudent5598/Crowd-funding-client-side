// Home.jsx
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Heading from "../Heading/Heading";
import ProductTypeSidebar from "../ProductTypeSidebar/ProductTypeSidebar";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";


const Home = () => {
    const categories = useLoaderData();
    

    console.log(categories);

    return (
        
        <div className="w-11/12 mx-auto ">
            
           <div>
           <Header/>
        
        <Banner/>
           </div>
            <Heading  title={'Explore Cutting-Edge Gadgets'}/>
            <div className="flex flex-col md:flex-row gap-6">
            <ProductTypeSidebar categories={categories} />
            {/* Hero Section within Navbar */}
      
            <div className="flex-1">
                {/* Render GadgetsCards or other child components based on routing */}
                <Outlet />
            </div>
        </div>
        </div>
    );
};

export default Home;
