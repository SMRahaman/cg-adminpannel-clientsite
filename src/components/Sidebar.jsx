import React from "react";
import {
  FaTachometerAlt,
  FaShoppingCart,
  FaUsers,
  FaUser,
  FaBox,
  FaCog,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GiCampingTent } from "react-icons/gi";
import { AiFillProduct } from "react-icons/ai";
import { MdCategory } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold hidden md:block mt-4 text-center itaNavLinkc">
        Cordial Group
      </h1>
      <ul className=" menu flex flex-col mt-5 text-xl">
        <NavLink
          to="/"
          className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:bg-blue-600 hover:text-white"
        >
          <FaTachometerAlt />
          <span className="hidden md:inNavLinkne lg:block text-lg">
            Dashboard
          </span>
        </NavLink>
        <ul>
          <li>
            <details open>
              <summary
                className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600 text-lg"
              >
                <GiCampingTent />
                Camping
              </summary>

              <ul>
                <NavLink
                  className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600 text-lg"
                >
                  Camping add
                </NavLink>
                <NavLink
                  className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600 text-lg"
                >
                  Camping view
                </NavLink>
              </ul>
            </details>
          </li>
        </ul>
        <ul>
          <li>
            <details open>
              <summary
                className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600 text-lg"
              >
                <MdCategory />
                Category
              </summary>

              <ul>
                <NavLink
                  className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600 text-lg"
                >
                  Category add
                </NavLink>
                <NavLink
                  className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600 text-lg"
                >
                  Category view
                </NavLink>
              </ul>
            </details>
          </li>
        </ul>
        <ul>
          <li>
            <details open>
              <summary
                className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600 text-lg"
              >
                <AiFillProduct />
                Products
              </summary>

              <ul>
                <NavLink
                  to="/product-add"
                  className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600 text-lg"
                >
                  Product add
                </NavLink>
                <NavLink
                  className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600 text-lg"
                >
                  Product view
                </NavLink>
              </ul>
            </details>
          </li>
        </ul>
        <NavLink
          className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
        >
          <FaShoppingCart />
          <span className="hidden md:inNavLinkne md:block text-lg">Order</span>
        </NavLink>
        <NavLink
          className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
        >
          <FaUser />
          <span className="hidden md:inNavLinkne md:block text-lg">User</span>
        </NavLink>
        <ul>
          <li>
            <details open>
              <summary
                className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600 text-lg"
              >
                <GiCampingTent />
                Report
              </summary>

              <ul>
                <NavLink
                  className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600 text-lg"
                >
                  Monthly selas report
                </NavLink>
                <NavLink
                  className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600 text-lg"
                >
                  Per day selas report
                </NavLink>
              </ul>
            </details>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Sidebar;
