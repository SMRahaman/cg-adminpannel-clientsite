import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import ThemeContextProvider, {
  ThemeCotext,
} from "../context/ThemeContextProvider";

const Main = () => {
  return (
    <ThemeContextProvider>
      <div className="flex">
        <Sidebar />
        <div
          className="grow ml-16 md:ml-64 h-full  bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white"
        >
          <Navbar />
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default Main;
