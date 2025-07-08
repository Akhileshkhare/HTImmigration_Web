import React from 'react';

import { Navigate, Outlet, useLocation } from "react-router-dom";
import authManager from "../services/auth/AuthManager";

const DefaultLayout = () => {
  const location = useLocation();
  const isLoggedIn = authManager.isLoggedIn();
const isAdminLoggedIn = authManager.isAdminLoggedIn();
  console.log("isLoggedIn", isLoggedIn, location.pathname);
  if (location.pathname === "/adminlogin" && isAdminLoggedIn) {
    console.log("adminlogin call");
    return (
      <div className="layout">
        <Outlet />
      </div>
    );
  } else if (
    (location.pathname === "/adminlogin" || location.pathname === "/") &&
    isLoggedIn
  ) {
    return <Navigate to="/dashboard" replace={true} />;
  } else {
    console.log("else part call");
    return (
      <div className="layout">
        <Outlet />
      </div>
    );
  }
};

export default DefaultLayout;
