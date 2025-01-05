
const Header = () => {
    return (
      <div className="hero-section bg-purple-600 rounded-b-2xl text-white flex flex-col items-center justify-center text-center  lg:px-40 lg:py-20">
      <h1 className="text-4xl lg:text-5xl font-bold mb-4">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
      </h1>
      <p className="text-lg lg:text-xl mb-6 max-w-2xl">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all.
      </p>
      <div className='pb-32'>
      <button className="btn bg-white text-purple-600 font-medium py-2 px-6 rounded-full hover:bg-gray-200 transition">
        Shop Now
      </button>
      </div>
      
    </div>
    );
};

export default Header;