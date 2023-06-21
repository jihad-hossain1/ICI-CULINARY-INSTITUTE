// import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { FaBars, FaUserCheck } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import { AuthContext } from "../../provider/AuthProvider";
import Container from "../container/Container";
import DarkmodeToggle from "../darkmode/DarkmodeToggle";

const Navbar = () => {
  // const isAdmin = true;
  const { user, logOut } = useContext(AuthContext);
  const navOptions = (
    <>
      <li className="hover:text-green-500 hover:font-semibold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-green-500" : "default"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li className="hover:text-green-500 hover:font-semibold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-green-500" : "default"
          }
          to="/instructor"
        >
          Instructors
        </NavLink>
      </li>
      <li className="hover:text-green-500 hover:font-semibold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-green-500" : "default"
          }
          to="/allclasses"
        >
          Classes
        </NavLink>
      </li>
      <li className="hover:text-green-500 hover:font-semibold">
        <NavLink
          to={`/isDashboard`}
          className={({ isActive }) =>
            isActive ? "text-green-500" : "default"
          }
        >
          M.Dashboard
        </NavLink>
      </li>
      <div className="hover:text-green-500 hover:font-semibold">
        <DarkmodeToggle></DarkmodeToggle>
      </div>

      {user ? (
        <>
          <li
            onClick={logOut}
            className="hover:text-green-500 hover:font-semibold cursor-pointer"
          >
            Logout
          </li>
          <li
            className="hover:text-green-500  hover:font-semibold"
            title={user.displayName}
          >
            <img
              src={
                user && user?.photoURL ? (
                  user?.photoURL
                ) : (
                  <>
                    <FaUserCheck className="w-10"></FaUserCheck>
                  </>
                )
              }
              alt="profile"
              height="30"
              width="30"
              className="rounded-full"
            />
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              to="/login"
              className="hover:text-green-500  hover:font-semibold"
            >
              Login
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <Container>
      <div className="max-w-screen-xl mx-auto">
        <div className="navbar fixed z-10 lg:bg-opacity-50  lg:bg-black lg:text-white max-w-screen-xl ">
          <div className=" ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
              >
                {navOptions}
              </ul>
            </div>
            <div className="flex items-center">
              <NavLink to="/" className="text-xl ml-2 uppercase">
                <img src={logoImg} className="w-20 lg:w-2/4" alt="" />
                {/* ici international */}
              </NavLink>
            </div>
          </div>
          <div className=" hidden lg:flex">
            <ul className="menu-horizontal space-x-10">{navOptions}</ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
