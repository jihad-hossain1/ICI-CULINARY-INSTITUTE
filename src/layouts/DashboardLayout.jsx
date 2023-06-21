import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import { ImUser } from "react-icons/im";
import { HiAcademicCap, HiOutlineArrowSmRight } from "react-icons/hi";
import {
  AiFillDatabase,
  AiFillDiff,
  AiFillFileAdd,
  AiFillHome,
  AiFillSetting,
  AiFillShopping,
  AiOutlineTeam,
} from "react-icons/ai";
import useAdmin from "../hook/useAdmin";

const cart = [
  { name: "shofiq" },
  { name: "shofiq1" },
  { name: "shofiq2" },
  { name: "shofiq3" },
  { name: "shofiq4" },
];
const DashboardLayout = () => {
  // const isAdmin = true;
  const [isAdmin, isAdminLoading] = useAdmin();

  return (
    <>
      {/* another dashboard  */}
      <div className="">
        <div className="drawer drawer-mobile pt-5">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="hidden lg:block">
            <ul className="space-y-3 px-12 border-0 border-r-2 min-h-screen dark:text-white pt-2">
              {/* admin user  */}
              {isAdmin ? (
                <>
                  <li className="hover:text-green-600">
                    <Link to={`addClass`} className="flex items-center">
                      <span>
                        <HiOutlineArrowSmRight className="text-2xl mr-2"></HiOutlineArrowSmRight>
                      </span>
                      Add Class
                    </Link>
                  </li>
                  <li className="hover:text-green-600">
                    <Link to={`addInstructor`} className="flex items-center">
                      <span>
                        <HiAcademicCap className="text-2xl mr-2"></HiAcademicCap>
                      </span>
                      Add Instructor
                    </Link>
                  </li>
                  <li className="hover:text-green-600">
                    <Link to={`allusers`} className="flex items-center">
                      <span>
                        <ImUser className="text-2xl mr-2"></ImUser>
                      </span>
                      All User
                    </Link>
                  </li>
                  <li className="hover:text-green-600">
                    <Link to={`manageClass`} className="flex items-center">
                      <span>
                        <AiFillSetting className="text-2xl mr-2"></AiFillSetting>
                      </span>
                      Manage Classes
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={`mycart`} className="flex items-center">
                      <span>
                        <AiFillShopping className="text-2xl mr-2"></AiFillShopping>
                      </span>
                      My Cart
                    </Link>
                  </li>
                  <li>
                    <Link to={`enrollClass`} className="flex items-center">
                      <span>
                        <AiFillShopping className="text-2xl mr-2"></AiFillShopping>
                      </span>
                      Enroll Class
                    </Link>
                  </li>
                </>
              )}

              <div className="divider"></div>
              <li className="hover:text-green-600">
                <Link to={`/`} className="flex items-center">
                  <span>
                    <AiFillHome className="text-2xl mr-2"></AiFillHome>
                  </span>{" "}
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div className="drawer-content flex flex-col items-start ">
            {/* <!-- Page content here --> */}

            <label
              htmlFor="my-drawer-2"
              className="shadow border-0 hover:border-r-8  border-green-500 px-3  bg-neutral-200 hover:font-semibold rounded py-1 mt-5 lg:hidden cursor-pointer"
            >
              Open Menu
            </label>
            <div className="lg:w-2/3 lg:mx-auto min-h-screen">
              <Outlet></Outlet>
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 min-h-screen dark">
              {/* admin user  */}
              {isAdmin ? (
                <>
                  <li className="hover:text-green-600">
                    <Link to={`addClass`} className="flex items-center">
                      <span>
                        <HiOutlineArrowSmRight className="text-2xl mr-2"></HiOutlineArrowSmRight>
                      </span>
                      Add Class
                    </Link>
                  </li>
                  <li className="hover:text-green-600">
                    <Link to={`addInstructor`} className="flex items-center">
                      <span>
                        <HiAcademicCap className="text-2xl mr-2"></HiAcademicCap>
                      </span>
                      Add Instructor
                    </Link>
                  </li>
                  <li className="hover:text-green-600">
                    <Link to={`allusers`} className="flex items-center">
                      <span>
                        <ImUser className="text-2xl mr-2"></ImUser>
                      </span>
                      All User
                    </Link>
                  </li>
                  <li className="hover:text-green-600">
                    <Link to={`manageClass`} className="flex items-center">
                      <span>
                        <AiFillSetting className="text-2xl mr-2"></AiFillSetting>
                      </span>
                      Manage Classes
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={`mycart`} className="flex items-center">
                      <span>
                        <AiFillShopping className="text-2xl mr-2"></AiFillShopping>
                      </span>
                      My Cart
                    </Link>
                  </li>
                  <li>
                    <Link to={`enrollClass`} className="flex items-center">
                      <span>
                        <AiFillShopping className="text-2xl mr-2"></AiFillShopping>
                      </span>
                      Enroll Class
                    </Link>
                  </li>
                </>
              )}

              <div className="divider"></div>
              <li className="hover:text-green-600">
                <Link to={`/`} className="flex items-center">
                  <span>
                    <AiFillHome className="text-2xl mr-2"></AiFillHome>
                  </span>{" "}
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
