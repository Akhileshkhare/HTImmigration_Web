import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
// import authManager from "../services/auth/AuthManager";
import DefaultLayout from "./DefaultLayout";

interface PrivateRouteProps {
  Layout: any;
}

const AdminPrivateRoute = ({ Layout = DefaultLayout }: PrivateRouteProps) => {
  // if (authManager.isAdminLoggedIn()) {
    return (
      <>
        <Layout>
          <Outlet />
        </Layout>
      </>
    );
  // } else {
  //   return <Navigate to="/adminlogin" replace={true} />;
  // }
};

export default AdminPrivateRoute;
