import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import userAvt from "../../assets/userAv.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const ClassCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { _id, image, price, name, seats, instructorName } = item;

  const handleEnroll = (item) => {
    // console.log(item);

    if (user && user?.email) {
      const enrollItem = {
        menuItemId: _id,
        name,
        image,
        price,
        seats,
        email: user.email,
        instructorName,
      };
      fetch(`${import.meta.env.VITE_BASE_URL}/carts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(enrollItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Enroll added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to Enroll class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to, LogIn",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <>
      <div className="border rounded-lg p-3 inline-block">
        <img src={image} className="object-cover rounded-lg" alt="" />
        <div className="mt-3 space-y-2">
          <h4 className="text-lg font-semibold">Class Name: {item?.name}</h4>
          <p className="text-md">Class Price: ${price}</p>
          <p className="text-md">Seats: {item?.seats}</p>
        </div>
        <div className="divider"></div>
        <div>
          <h4 className="text-center font-extralight">Instructor Info.</h4>
          <img src={userAvt} className="rounded-full w-10" alt="" />
          <h4 className="font-semibold">{item?.instructorName}</h4>
          <p className="text-neutral-700">{item?.email}</p>
        </div>
        <div className="divider"></div>
        <div className="text-center mt-3 flex justify-between items-center px-6">
          <button
            onClick={() => handleEnroll(item)}
            className="hover:text-green-700 hover:font-semibold border border-slate-300 hover:border-green-300 rounded-md py-1 px-2"
          >
            Enroll Now
          </button>

          <button className="hover:text-green-700 hover:font-semibold border border-slate-300 hover:border-green-300  rounded-md py-1 px-2">
            <Link to={`/allclasses/${_id}`}>Show Details</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default ClassCard;
