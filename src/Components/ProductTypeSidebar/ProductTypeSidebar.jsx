import { Link, NavLink } from "react-router-dom";

// ProductTypeSidebar.jsx
const ProductTypeSidebar = ({categories}) => {
    

    return (
      <div className="p-4 bg-white md:w-1/4 shadow-xl rounded-xl h-[530px]     ">
        <h2 className="text-lg rounded-full font-semibold mb-4">Product Categories</h2>
        <ul className="space-y-2">
        {categories.map((category) => (
<NavLink to={`/cetagories/${category.name}`} key={category.id} className={({ isActive }) => `btn btn-outline rounded-full btn-block text-left ${isActive ? 'bg-[#1f2937] text-white' : ''}`}
>

    {category.name}
  </NavLink>
))}
        </ul>
      </div>
    );
  };
  
  export default ProductTypeSidebar;
  