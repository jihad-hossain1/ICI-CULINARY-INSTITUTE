import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Instructor from "../pages/Instructor/Instructor";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddClass from "../pages/Dashboard/InstuctorDashboard/AddClass";
import MyClass from "../pages/Dashboard/InstuctorDashboard/MyClass";
import AddInstructor from "../pages/Dashboard/Admin/AddInstructor";
import AllClasses from "../pages/AllClasses/AllClasses";
import ClassDetails from "../pages/AllClasses/ClassDetails";
import Student from "../pages/Dashboard/Student/Student";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import Error from "../Error";
import Payment from "../pages/Dashboard/Payment/Payment";
import PayWithModal from "../pages/Dashboard/Payment/PayWithModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructor",
        element: <Instructor></Instructor>,
      },
      {
        path: "allclasses",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "allclasses/:id",
        element: <ClassDetails></ClassDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BASE_URL}/class/${params.id}`),
      },
    ],
  },
  {
    path: "signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClass",
        element: <MyClass></MyClass>,
      },
      {
        path: "addInstructor",
        element: <AddInstructor></AddInstructor>,
      },
      {
        path: "manageClass",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "student",
        element: <Student></Student>,
      },
      {
        path: "booking/:id",
        element: <PayWithModal></PayWithModal>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BASE_URL}/student/${params.id}`),
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);

export default router;
