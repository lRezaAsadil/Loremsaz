import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (text) =>
  toast.info(text, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
