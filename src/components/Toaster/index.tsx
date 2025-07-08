import React from "react";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastNotification: React.FC = () => {
  return <ToastContainer position="top-right" autoClose={3000} />;
};

export const showToast = (
  message: string,
  type: "info" | "success" | "warning" | "error" = "info",
  options?: ToastOptions
) => {
  switch (type) {
    case "info":
      toast.info(message, {
        ...options,
        theme: "colored",
      });
      break;
    case "success":
      toast.success(message, {
        ...options,
        theme: "colored",
      });
      break;
    case "warning":
      toast.warning(message, {
        ...options,
        theme: "colored",
      });
      break;
    case "error":
      toast.error(message, {
        ...options,
        theme: "colored",
      });
      break;
    default:
      toast(message, options);
  }
};

export default ToastNotification;
