import React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from "../../components/container/Container";
import useAdmin from "../../hook/useAdmin";
// import useAuth from "../../hook/useAuth";
import useInstructor from "../../hook/useInstructor";
// import useNormalUser from "../../hook/useNormalUser";
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

const Dashboard = () => {
  // const { user } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  
  const isInstructor = useInstructor();
  // const user = false;
  // const isNormalUser = useNormalUser();

  return (
    <>
      {/* another dashborad  */}
      <Container>
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
                    <Link to={`student`} className="flex items-center">
                      <span>
                        <AiFillShopping className="text-2xl mr-2"></AiFillShopping>
                      </span>
                      My Booking
                    </Link>
                  </li>
                  <li>
                    <Link to={`student`} className="flex items-center">
                      <span>
                        <AiFillShopping className="text-2xl mr-2"></AiFillShopping>
                      </span>
                      My Class
                    </Link>
                  </li>
                </>
              )}
              {/* instructor  */}
              {/* {isAdmin ? (
                <>
                  <li className="pb-1 border-0 border-b-2 hover:border-b-green-600">
                    <Link to={`addClass`} className="flex items-center">
                      <span>
                        <AiFillFileAdd className="text-2xl mr-2"></AiFillFileAdd>
                      </span>
                      Add Class
                    </Link>
                  </li>
                  <li className="pb-1 border-0 border-b-2 hover:border-b-green-600">
                    <Link to={`myClass`} className="flex items-center">
                      <span>
                        <AiFillDatabase className="text-2xl mr-2"></AiFillDatabase>
                      </span>
                      My Classes
                    </Link>
                  </li>
                </>
              ) : (
                <></>
              )} */}
              {/* user  */}
              {/* {isAdmin ? (
                <></>
              ) : (
                <>
                  <li className="pb-1 border-0 border-b-2 hover:border-b-green-600">
                    <Link to={`student`} className="flex items-center">
                      <span>
                        <AiFillDiff className="text-2xl mr-2"></AiFillDiff>
                      </span>
                      My Class
                    </Link>
                  </li>
                  <li className="pb-1 border-0 border-b-2 hover:border-b-green-600">
                    <Link to={`student`} className="flex items-center">
                      <span>
                        <AiFillShopping className="text-2xl mr-2"></AiFillShopping>
                      </span>
                      My Booking
                    </Link>
                  </li>
                </>
              )} */}

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
              className="shadow-lg border border-primary px-5  bg-neutral-200 hover:font-semibold rounded-md mt-5 lg:hidden"
            >
              Open Menu
            </label>
            <div className="ml-12 mx-auto w-full">
              <Outlet></Outlet>
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 ">
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
                    <Link to={`student`} className="flex items-center">
                      <span>
                        <AiFillShopping className="text-2xl mr-2"></AiFillShopping>
                      </span>
                      My Booking
                    </Link>
                  </li>
                  <li>
                    <Link to={`student`} className="flex items-center">
                      <span>
                        <AiFillShopping className="text-2xl mr-2"></AiFillShopping>
                      </span>
                      My Class
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
      </Container>
    </>
  );
};

export default Dashboard;
