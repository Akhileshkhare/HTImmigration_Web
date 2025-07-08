import { Link, Outlet, useLocation } from "react-router-dom";
import React, { memo, useState } from "react";
import PopupHeader from "../pages/PopupHeader"; // Ensure PopupHeader is a default export
import PillButton from "../components/button"; // Ensure PillButton is a default export
import { adminSidebarItems } from "../config/sideBarItems"; // Ensure sideBarItems is a named export
import getDeviceId from "../utility/getDeviceId";

const SuperAdminLayouts = memo(() => {
  const location = useLocation(); // Get current URL
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const user = 'Super Admin';

  console.log("user info : ", user);


  const handleLogout = () => {
     const deviceId = getDeviceId();
  };
  return (
    <>
      <div className="fixed w-full z-50 flex bg-white dark:bg-gray-900 dark:text-gray-100 border-gray-400 p-2 items-center justify-center h-16 px-10 border-b-[1px]">
        <div className="logo ml-20 font-bold  transform ease-in-out duration-500 flex-none h-full flex items-center justify-center dark:text-gray-100">
          <span className=" text-2xl/7 font-bold text-gray-900  dark:text-white">
            VZTEXT ADMIN
          </span>
        </div>
        <div className="grow h-full flex items-center justify-center"></div>
        <div className="flex-none h-full text-center flex items-center justify-center">
          <div className="flex space-x-3 items-center px-3">
          
            <div className="md:block font-semibold text-sm md:text-md text-black dark:text-white capitalize">
              {user ? <span>{user}</span> : "Admin"} |
              <button
                onClick={() => setShowLogoutConfirm(true)}
                className="pl-1 capitalize"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*  header ends */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 z-50">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-0 text-center">
            <PopupHeader
              title="Logout"
              onClose={() => setShowLogoutConfirm(false)}
            />
            <div className="p-6">
              <h2 className="text-lg font-semibold dark:text-white py-2">
                Are you sure you want to logout?
              </h2>
              <div className="mt-4 flex justify-center space-x-6">
                <PillButton
                  onClick={() => setShowLogoutConfirm(false)}
                  className="bg-white  border hover:bg-red-600 hover:dark:bg-red-600 hover:text-white hover:dark:text-white cancle-btn"
                >
                  Cancel
                </PillButton>
                <PillButton variant="dark" onClick={handleLogout}>
                  Yes
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* sidebar start */}
      <div className="h-screen z-50 fixed w-20 bg-gray-900 text-white flex flex-col justify-between items-center py-4">
        <div className="-right-6 mb-12 transition transform ease-in-out duration-500 flex border-4 border-white dark:border-bg-gray-900 bg-gray-900 dark:hover:bg-blue-500 hover:bg-purple-500 absolute top-2 p-3 rounded-full text-white hover:rotate-45">
          <a href="/admin/dashboard">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="red"
              className="w-4 h-4"
            >
              <path d="M18.302 0H22v.003L10.674 24H7.662L2 12h3.727l3.449 7.337z" />
            </svg>
          </a>
        </div>
        <div className="flex flex-col items-center space-y-6 mt-[100px] px-2">
          {adminSidebarItems.map((item: any) =>
            item.name === "SMB"  ? null : (
              <Link to={item.url} key={item.name}>
                <div className="flex flex-col items-center space-y-1 text-gray-50 cursor-pointer side-icon">
                  <item.icon
                    className={`${
                      location.pathname === item.url
                        ? "bg-gray-500 p-1 rounded-lg text-2xl"
                        : "text-2xl hover:bg-gray-400"
                    }`}
                  />
                  <span className="text-xs">{item.name}</span>
                </div>
              </Link>
            )
          )}
        </div>
      </div>

      {/* sidebar ends */}

      <div className="content admin-layout  pl-[82px]  pt-[66px] justify-center bg-white  dark:bg-gray-800 h-screen">
        <Outlet />
      </div>
    </>
  );
});
export default SuperAdminLayouts;
