import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotifyMessage = {
  SUCCESS: (msg: any) =>
    toast.success(msg, {
      className: "toast-message",
      icon: ({ theme, type }) => (
        <i className="toast-icon ri-checkbox-circle-fill"></i>
      ),
    }),
  ERROR: (msg: any) =>
    toast.error(msg, {
      className: "toast-message",
    }),
  WARN: (msg: any) =>
    toast.warn(msg, {
      className: "toast-message",
    }),
  INFO: (msg: any) =>
    toast.info(msg, {
      className: "toast-message",
    }),
};

export default NotifyMessage;
