import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const Instructors = () => {
  const instructors = [
    {
      name: "Monirul Islam",
      image: "https://i.ibb.co/mGY8hw3/i1.jpg",
      email: "abc@gmail.com",
    },
    {
      name: "Tofail Ahmed",
      image: "https://i.ibb.co/p2gkt6z/i2.jpg",
      email: "abc1@gmail.com",
    },
    {
      name: "Zakariy Islam",
      image: "https://i.ibb.co/HKh0vVS/i3.jpg",
      email: "abc3@gmail.com",
    },
    {
      name: "Monirul Islam",
      image: "https://i.ibb.co/NWXbFFt/i4.jpg",
      email: "abc@gmail.com",
    },
    {
      name: "Aliza Gomez",
      image: "https://i.ibb.co/HKh0vVS/i3.jpg",
      email: "abc@gmail.com",
    },
    {
      name: "Sufiya khanom",
      image: "https://i.ibb.co/NWXbFFt/i4.jpg",
      email: "abc@gmail.com",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-5 ">
        {instructors.map((ins, index) => (
          <div
            key={index}
            className="rounded-lg hover:shadow-lg shadow inline-block"
          >
            <img src={ins.image} className="object-cover rounded-t-lg" alt="" />
            <div className="text-center py-3">
              <h4 className="font-semibold">{ins.name}</h4>
              <p>{ins.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
