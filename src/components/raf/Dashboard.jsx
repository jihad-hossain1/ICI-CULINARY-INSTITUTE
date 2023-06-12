import React from "react";
import React from "react";
import { Drawer, Space } from "antd";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Container from "../../components/container/Container";
import useAdmin from "../../hook/useAdmin";
import useAuth from "../../hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import useInstructor from "../../hook/useInstructor";
import useNormalUser from "../../hook/useNormalUser";
import { ImUser } from "react-icons/im";
import {
  AiFillHome,
  AiFillSetting,
  AiFillShopping,
  AiOutlineTeam,
} from "react-icons/ai";
const Dashboard = () => {
  const { user } = useAuth();
  const isAdmin = useAdmin();
  const isInstructor = useInstructor();
  // const user = false;
  const isNormalUser = useNormalUser();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Space>
        <button
          onClick={showDrawer}
          className="px-5 py-2 mt-5 border bg-green-50 rounded--md lg:hidden"
        >
          Open Menu
        </button>
      </Space>

      <Drawer
        title="Dashboard"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <ul className="space-y-4 text-lg">
          <div className="space-y-4 text-lg px-10 bg-green-50  min-h-screen pt-8">
            <li>
              <Link to={`/`} className="flex">
                <span>
                  <AiFillHome className="text-2xl mr-2"></AiFillHome>
                </span>{" "}
                Home
              </Link>
            </li>
            {isInstructor ? (
              <>
                <li>
                  <Link to={`addClass`}>Add Class</Link>
                </li>
                <li>
                  <Link to={`myClass`}>My Class</Link>
                </li>
              </>
            ) : (
              ""
            )}
            {isAdmin ? (
              <>
                <li>
                  <Link to={`addClass`}>Add Class</Link>
                </li>
                <li>
                  <Link to={`addInstructor`}>Add Instructor</Link>
                </li>
                <li>
                  <Link to={`allusers`} className="flex items-center">
                    <span>
                      <ImUser className="text-2xl mr-2"></ImUser>
                    </span>
                    All User
                  </Link>
                </li>
                <li>
                  <Link to={`manageClass`} className="flex items-center">
                    <span>
                      <AiFillSetting className="text-2xl mr-2"></AiFillSetting>
                    </span>
                    Manage Classes
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
            {user && (
              <>
                <li>
                  <Link to={`student`} className="flex items-center">
                    <span>
                      <AiFillShopping className="text-2xl mr-2"></AiFillShopping>
                    </span>
                    My Booking Class
                  </Link>
                </li>
                <li>
                  <Link to={`student`}>Enrolled Class</Link>
                </li>
              </>
            )}
          </div>
        </ul>
      </Drawer>

      <div className="grid grid-rows-3 grid-flow-col gap-4 ">
        <div className="hidden lg:block row-span-2">
          <ul className="space-y-4 text-lg px-10 bg-green-50  min-h-screen pt-8">
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            {isInstructor ? (
              <>
                <li>
                  <Link to={`addClass`}>Add Class</Link>
                </li>
                <li>
                  <Link to={`myClass`}>My Class</Link>
                </li>
              </>
            ) : (
              ""
            )}
            {isAdmin ? (
              <>
                <li>
                  <Link to={`addClass`}>Add Class</Link>
                </li>
                <li>
                  <Link to={`addInstructor`}>Add Instructor</Link>
                </li>
                <li>
                  <Link to={`allusers`}>All User</Link>
                </li>
                <li>
                  <Link to={`manageClass`}>Manage Classes</Link>
                </li>
              </>
            ) : (
              ""
            )}
            {isNormalUser && (
              <>
                <li>
                  <Link to={`student`}>My Booking Class</Link>
                </li>
                <li>
                  <Link to={`student`}>Enrolled Class</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className=" row-span-2 col-span-10 w-4/6 mx-auto">
          {/* {isAdmin && (
            <div className="text-center mt-40 text-3xl text-gray-700 font-extrabold lg:text-7xl">
              Welcome Your Dashboard
            </div>
          )}
          {instructor && (
            <div className="text-center mt-40 text-3xl text-gray-700 font-extrabold lg:text-7xl">
              Welcome Your Dashboard
            </div>
          )}
          {isStudent && (
            <div className="text-center mt-40 text-3xl text-gray-700 font-extrabold lg:text-7xl">
              Welcome Your Dashboard
            </div>
          )} */}
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
