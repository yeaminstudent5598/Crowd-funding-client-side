import { Bounce, toast } from "react-toastify";

export const tostMessage = (message, type) => {
  if (toast[type]) {
    toast[type](message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      className : "p-2 rounded-full py-0 "
    });
  } else {
    console.error(`Invalid toast type: ${type}`);
  }
};
