
const ErrorElement = () => {
    return (
        <div className="bg-white">
            <div className="flex justify-center items-center flex-col gap-3">
  <div className="w-[400px] px-5 flex justify-center ">
    <img src="https://niceillustrations.com/wp-content/uploads/2020/09/404-Illustration.png" alt="" />
  </div>
  <h1 className="text-4xl font-bold mt-4">Page Not Found</h1>
  <p className="text-lg mt-2 text-gray-600">Oops! The page you're looking for doesn't exist.</p>
  <a className="btn px-10 mt-5 shadow-orange-300 rounded-full" href="/">Go Home</a>
</div>

        </div>
    );
};

export default ErrorElement;