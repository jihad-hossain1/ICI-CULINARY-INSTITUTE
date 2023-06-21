import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Button, Modal } from "antd";
import { useState } from "react";

const StudentCard = ({ item, handleDelete,index }) => {
  const { name, image, price, seats, email } = item;
  const handlePay = (item) => {
    console.log(item);
  };
  const modalPay = useLoaderData();
  // modal fuction start
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // modal fuction end

  const handlePayment = (id) => {
    console.log(id);
  }
  return (
    <div className="border space-y-3  m-4 rounded-md">
      <div className="flex justify-between items-center rounded-lg shadow hover:shadow-md">
        <div className="flex items-center gap-10">
          <div>
            <img src={image} className="rounded-lg w-32 object-cover" alt="" />
          </div>
          <div className="pb-1">
            <h4 className="font-semibold">class: {name}</h4>
            <p>Price: ${price}</p>
            <p>Seats: {seats}</p>
            <button className="border  px-2 hover:font-semibold rounded-md ">
              Details
            </button>
          </div>
        </div>
        <div className="space-x-3 pr-2">
          <button
            onClick={() => handleDelete(item)}
            className="border border-red-500 px-2 hover:font-semibold hover:bg-red-400 hover:text-white rounded-md"
          >
            Cancel
          </button>
          <Button
            type="primary"
            onClick={showModal}
            className="border border-green-500 px-2 hover:font-semibold rounded-md hover:bg-green-400 hover:text-white"
          >
            <span onClick={()=>handlePayment(item._id)}>Pay</span>
          </Button>
        </div>
      </div>
      <Modal
        title="Bill Payment"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h2></h2>
      </Modal>
    </div>
  );
};

export default StudentCard;
