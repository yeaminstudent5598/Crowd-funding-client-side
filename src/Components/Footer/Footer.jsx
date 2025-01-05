
const Footer = () => {
    return (
      <footer className="bg-white py-16 mt-20">
      <div className="wrap text-center">
        <h2 className="font-bold text-4xl mb-2">Gadget Heaven</h2>
        <p className="text-halkaBlack">Leading the way in cutting-edge technology and innovation.</p>
        <div className="mb-10 mt-7">
          <hr />
        </div>
      </div>
      
      <div className="wrap mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-5 text-center justify-around">
        <div>
          <h3 className="font-bold text-md mb-6">Services</h3>
          <div className="flex flex-col gap-3 text-halkaBlack">
            <p>Product Support</p>
            <p>Order Tracking</p>
            <p>Shipping & Delivery</p>
            <p>Returns</p>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-md mb-6">Company</h3>
          <div className="flex flex-col gap-3">
            <a href="/about-us">About Us</a>
            <a href="/careers">Careers</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-md mb-6">Legal</h3>
          <div className="flex flex-col gap-3 text-halkaBlack">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;