import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { Image, Card } from "antd";
const { Meta } = Card;

const Instructor = () => {
   const { data: instructors = []} = useQuery({
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:grid-cols-4 space-y-3 ">
          {instructors.map((ins, index) => (
            <div key={index} className="w-2/ mx-auto">
              <Card
                hoverable
                style={{
                  width: 330,
                }}
                cover={
                  <Image
                    alt="instructor"
                    src={ins.image}
                    width={300}
                    preview={{
                      src: ins.image,
                    }}
                  />
                }
              >
                <Meta title={ins.instructorName} description={ins.email} />
                <div className='text-center mt-2'>
                  <button className='px-3 py-2 border border-green-600 shadow-md rounded  min-w-full'>More Details</button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Instructor;