import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {  useNavigate } from "react-router-dom";
import authManager from "../services/auth/AuthManager";
import localStorageUtil from "../utility/localStorageUtil";
import React,{ useState } from "react";
import ToastNotification, { showToast } from "../components/Toaster";

import LoginImage from "../assets/login.jpg";
import PillButton from "../components/button";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Please enter your username"),
    password: yup.string().required("Please enter your password"),
  })
  .required();

export default function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const handleLogin = (data: any) => {
    setLoading(true);
    authManager
      .login(data.email, data.password, true)
      .then(async (result) => {
        if (result.message === "error" && !result.success) {
          setErrorMessage("Login failed. Please check your credentials.");
          setLoading(false);
          if (
            localStorageUtil.getLocalStorage("currentUrl") !== "/adminlogin" &&
            localStorageUtil.getLocalStorage("currentUrl") !== "/logout"
          ) {
            const url = localStorageUtil.getLocalStorage("currentUrl");
            if (url) navigate(`${url}`);
          }
        } else {        
          setLoading(false);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.error("handleSubmit error:", err);
        showToast(err.message, "error");
        setErrorMessage("Login failed. Please check your credentials.");
        setLoading(false);
      });
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-slate-800">
      <ToastNotification/>
      <div
        className="hidden lg:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${LoginImage})` }}
      ></div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white dark:bg-slate-800">
        <div className=" bg-white dark:bg-slate-800 w-[80%] sm:w-[400px] p-8  relative py-12">
          <div className="flex flex-row items-center text-center mb-6">
            <div className="transition transform ease-in-out duration-500 flex border-4 dark:border-white border-[#0F172A] bg-[#1E293B] dark:hover:bg-blue-500 hover:bg-purple-500 p-3 rounded-full text-white hover:rotate-45">
              <a href="/" title="HT Immigration Solutions Home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="red"
                  className="w-8 h-8"
                >
                  <path d="M18.302 0H22v.003L10.674 24H7.662L2 12h3.727l3.449 7.337z" />
                </svg>
              </a>
            </div>
            <h2 className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">
              Admin Sign in
            </h2>
          </div>

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Email Address
              </label>
              <input
                id="email"
                {...register("email")}
                type="email"
                style={{
                  borderColor: errors.email ? "red" : "#c4c8cc",
                  borderWidth: "1px",
                }}
                className={`bg-gray-50  text-sm rounded-lg w-full p-2.5 min-h-[44px] mt-1`}
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium  text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                id="password"
                {...register("password")}
                type="password"
                style={{
                  borderColor: errors.password ? "red" : "#c4c8cc",
                  borderWidth: "1px",
                }}
                className={`bg-gray-50 border text-sm rounded-lg w-full p-2.5 min-h-[44px] mt-1 `}
              />
              {errors.password && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="min-h-[16px]">
              {errorMessage && (
                <p className="text-sm text-red-600 bg-red-100 border border-red-600 rounded p-4">
                  {errorMessage}
                </p>
              )}
            </div>
            <PillButton
              type="submit"
              variant="dark"
              size="xl"
              className="w-full font-medium mt-0 py-2 px-4 rounded-md  transition duration-300 dark:hover:text-gray-100   dark:hover:bg-gray-700 dark:bg-white  dark:text-gray-900"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Sign in"}
            </PillButton>
          </form>
        </div>
      </div>
    </div>
  );
}
