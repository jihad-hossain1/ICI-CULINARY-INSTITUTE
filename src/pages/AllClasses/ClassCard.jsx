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
  const { _id, image, classPrice, name, seats, instructorName } = item;

  const handleEnroll = (item) => {
    // console.log(item);

    if (user && user?.email) {
      const enrollItem = {
        menuItemId: _id,
        name,
        image,
        classPrice,
        seats,
        email: user.email,
        instructorName,
      };
      fetch(`${import.meta.env.VITE_BASE_URL}/student`, {
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
    <div>
      <Card
        className="shadow-md hover:shadow-lg"
        style={{
          width: 400,
        }}
        cover={<img alt="class" src={image} />}
        actions={[
          <button onClick={() => handleEnroll(item)}>Enroll Now</button>,
          <button>
            <Link to={`/allclasses/${_id}`}>Show Details</Link>
          </button>,
        ]}
      >
        <div className="py-2">
          <h4 className="text-lg font-semibold">Class Name: {item?.name}</h4>
          <p className="text-md">Class Price: ${classPrice}</p>
          <p className="text-md">Seats: {item?.seats}</p>
        </div>
        <Meta
          className="border rounded-md p-2 "
          avatar={<Avatar src={userAvt} />}
          title={`${item?.instructorName} ( Instructor )`}
          description={`Email: ${item?.email}`}
        />
      </Card>
    </div>
  );
};

export default ClassCard;
