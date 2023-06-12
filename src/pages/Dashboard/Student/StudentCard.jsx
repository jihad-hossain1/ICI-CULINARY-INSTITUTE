import React from "react";
import { Link } from "react-router-dom";

const StudentCard = ({ studentItem, handleDelete }) => {
  const { name, image, classPrice, seats, email } = studentItem;
  const handlePay = (studentItem) => {
    console.log(studentItem);
  };
  return (
    <div className="border space-y-3  m-4 rounded-md">
      <div className="flex justify-between items-center rounded-lg shadow hover:shadow-md">
        <div className="flex items-center gap-10">
          <div>
            <img src={image} className="rounded-lg w-32 object-cover" alt="" />
          </div>
          <div className="pb-1">
            <h4 className="font-semibold">class: {name}</h4>
            <p>Price: ${classPrice}</p>
            <p>Seats: {seats}</p>
            <button className="border  px-2 hover:font-semibold rounded-md ">
              Details
            </button>
          </div>
        </div>
        <div className="space-x-3 pr-2">
          <button
            onClick={() => handleDelete(studentItem)}
            className="border border-red-500 px-2 hover:font-semibold hover:bg-red-400 hover:text-white rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={() => handlePay(studentItem)}
            className="border border-green-500 px-2 hover:font-semibold rounded-md hover:bg-green-400 hover:text-white"
          >
            <Link to={`/dashboard/booking/${studentItem._id}`}>Pay</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
