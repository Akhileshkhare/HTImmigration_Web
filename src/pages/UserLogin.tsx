import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import ToastNotification, { showToast } from "../components/Toaster";
import PillButton from "../components/button";
import httpClient from "../services/httpclient";
import { AuthResponse } from "../types";
const LOGIN = "/users/login"; // Change to user login endpoint
// src/services/auth/UserAuthManager.ts

type LoginResult = {
    success: boolean;
    token?: string;
    error?: string;
};

const userAuthManager = {
    async login(username: string, password: string, pin: string): Promise<LoginResult> {
        const data = { username, password, pin };
        try {
            const response = await httpClient.post<AuthResponse>(LOGIN, data);
            console.log(response)
            if (response.user) {
                // Optionally store user info for dashboard
                localStorage.setItem("user", JSON.stringify(response.user));
                return {
                    success: true,
                    token: undefined, // No token, but you can add if needed
                };
            } else {
                return {
                    success: false,
                    error: "Invalid credentials",
                };
            }
        } catch (err: any) {
            return {
                success: false,
                error: err.message || "Network error",
            };
        }
    },
};

// export default userAuthManager;

const schema = yup.object({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
  pin: yup
    .string()
    .matches(/^\d{4}$/, "PIN must be a 4-digit number")
    .required("Please enter your 4-digit PIN"),
});

export default function UserLogin() {
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
    userAuthManager
      .login(data.username, data.password, data.pin)
      .then((result) => {
        console.log(result)
        if (!result.success) {
          setErrorMessage("Login failed. Please check your credentials.");
          setLoading(false);
        } else {
          setLoading(false);
          console.log('Dashboard Call')
          navigate("/userdashboard"); // Redirect to Dashboard after successful login
        }
      })
      .catch((err) => {
        showToast(err.message, "error");
        setErrorMessage("Login failed. Please check your credentials.");
        setLoading(false);
      });
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-slate-800">
      <ToastNotification />
      <div className="w-full flex items-center justify-center p-8 bg-white dark:bg-slate-800">
        <div className="bg-white dark:bg-slate-800 w-[80%] sm:w-[400px] p-8 relative py-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            User Sign in
          </h2>
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                Username
              </label>
              <input
                {...register("username")}
                type="text"
                autoComplete="username"
                className={`bg-gray-50 text-sm rounded-lg w-full p-2.5 min-h-[44px] mt-1`}
                style={{
                  borderColor: errors.username ? "red" : "#c4c8cc",
                  borderWidth: "1px",
                }}
              />
              {errors.username && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                autoComplete="current-password"
                className={`bg-gray-50 border text-sm rounded-lg w-full p-2.5 min-h-[44px] mt-1`}
                style={{
                  borderColor: errors.password ? "red" : "#c4c8cc",
                  borderWidth: "1px",
                }}
              />
              {errors.password && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                4-digit PIN
              </label>
              <input
                {...register("pin")}
                type="text"
                maxLength={4}
                className={`bg-gray-50 border text-sm rounded-lg w-full p-2.5 min-h-[44px] mt-1`}
                style={{
                  borderColor: errors.pin ? "red" : "#c4c8cc",
                  borderWidth: "1px",
                }}
              />
              {errors.pin && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.pin.message}
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
              className="w-full font-medium mt-0 py-2 px-4 rounded-md transition duration-300 dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:bg-white dark:text-gray-900"
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