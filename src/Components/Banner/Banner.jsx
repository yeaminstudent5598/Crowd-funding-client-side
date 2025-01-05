import BannerImg from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div className="relative border border-2 p-4 rounded-2xl border-white w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto bottom-20 md:bottom-36">
            <img src={BannerImg} alt="Gadget Banner" className="rounded-lg w-full h-auto" />
        </div>
    );
};

export default Banner;
