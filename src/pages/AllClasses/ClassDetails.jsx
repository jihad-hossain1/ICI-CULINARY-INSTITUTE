import React from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../../components/container/Container";

const ClassDetails = () => {
  const classDetail = useLoaderData();
  console.log(classDetail);
  const {
    image,
    campus,
    category,
    classPrice,
    details,
    duration,
    instructorName,
    email,
    seats,
    name,
  } = classDetail;
  return (
    <div className="bg-green-100 bg-opacity-25">
      <div className="hero h-[400px] bg-[url('https://i.ibb.co/tqpd8TX/cover-instructor.png')]">
        <div className=" bg-black bg-opacity-50"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-extrabold bg-black bg-opacity-40 rounded-md px-4 py-2 text-neutral-50 shadow-lg">
              Class Details
            </h1>
          </div>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
          <div className="  p-7 ">
            <img src={image} className="rounded-lg object-cover" alt="" />
          </div>
          <div className=" p-7">
            <h4 className="text-lg font-semibold text-center">{name}</h4>
            <div className="space-y-5 mt-10">
              <p>
                {" "}
                <span className="font-semibold border border-green-300 rounded bg-green-400 text-white px-4 py-1 shadow">
                  Category:
                </span>
                <span className="font-normal ml-2">{category}</span>
              </p>
              <p>
                {" "}
                <span className="font-semibold border border-green-300 rounded bg-green-400 text-white px-4 py-1 shadow">
                  Campus:
                </span>
                <span className="font-normal ml-2">{campus}</span>
              </p>
              <p>
                {" "}
                <span className="font-semibold border border-green-300 rounded bg-green-400 text-white px-4 py-1 shadow">
                  Duration:
                </span>
                <span className="font-normal ml-2">{duration}</span>
              </p>
              <p>
                {" "}
                <span className="font-semibold border border-green-300 rounded bg-green-400 text-white px-4 py-1 shadow">
                  Descriptions:
                </span>
                <span className="font-normal ml-2">{details}</span>
              </p>
              <div className="">
                <button className="w-full px-2 py-2 shadow border border-green-300 bg-green-600 text-white font-semibold rounded hover:bg-green-700 hover:shadow-md">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ClassDetails;
