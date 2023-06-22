import { useQuery } from "@tanstack/react-query";
import React from "react";

import { Image, Card } from "antd";
const { Meta } = Card;

const Instructor = () => {
  const { data: instructors = [] } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/instructor`);
      return res.json();
    },
  });

  return (
    <div className="">
      <div className="hero h-[400px] bg-[url('https://i.ibb.co/tqpd8TX/cover-instructor.png')]">
        <div className=" bg-black bg-opacity-50"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-extrabold bg-black bg-opacity-40 rounded-md px-4 py-2 text-neutral-50 shadow-lg">
              All Instuctors
            </h1>
          </div>
        </div>
      </div>

      {/* another Card */}
      <h4>Total Instructors: {instructors.length}</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 py-5 lg:grid-cols-4 gap-5 ">
        {instructors.map((ins, index) => (
          <div
            key={index}
            className="rounded-lg hover:shadow-lg shadow inline-block hover:border"
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

export default Instructor;
