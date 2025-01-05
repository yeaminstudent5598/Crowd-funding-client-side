import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../MainLayout/MainLayOut";
import Statistics from "../Components/Statistics/Statistics";
import Dashboard from "../Components/Dashboard/Dashboard";
import Home from "../Components/Home/Home";
import GadgetsCards from "../Components/GadgetsCards/GadgetsCards";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import Cable from "../Components/Cable/Cable";
import ErrorElement from "../Components/ErrorElement/ErrorElement";


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
      errorElement:<ErrorElement/>,
      children: [
        {
          path: '/',
          element: <Home/>,
          loader: () => fetch('/ProductType.json'),
          children: [
            {
                path:'/',
                element: <GadgetsCards/>,
                loader: () => fetch('/AllCategories.json'),
            },
            {
                path:'/cetagories/:category',
                element: <GadgetsCards/>,
                loader: () => fetch('/AllCategories.json'),
            },
            {
              path:'/cetagories/:category',
              element:<Cable/>
            }
          ],
        },
        {
          path: 'statistics',
          element: <Statistics/>,
          loader: () => fetch('/AllCategories.json'),
        },
        {
          path: 'dashboard',
          element: <Dashboard/>,
          loader: () => fetch('/AllCategories.json'),
        },
        {
          path: '/product-details/:product_id',
          element: <ProductDetails/>,
          loader: () => fetch('/AllCategories.json'),
        }
       
      ]
    },
  ]);
export default Router;