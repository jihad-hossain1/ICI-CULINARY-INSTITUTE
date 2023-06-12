import React from "react";
import Select from "react-select";

const SearchCourse = () => {
  const options = [
    { value: "Food Curving", label: "Food Curving" },
    { value: "FastFood", label: "FastFood" },
  ];
  const options2 = [
   
    { value: "Aliza Gomez", label: "Aliza Gomez" },
    { value: "Monirul Islam", label: "Monirul Islam" },
  ];
  return (
    <div className="my-10">
      <div className="bg-[url('https://i.ibb.co/QrVWXn0/serch.jpg')] min-h-36 grid grid-cols-1 md:grid-cols-2 py-5">
        <div className=""></div>

        <div>
          <h4 className="text-xl px-11 font-semibold text-white">
            Search Our Classes
          </h4>
          <form action="">
            <div className=" px-11 py-5 space-y-5">
              <div>
                <label htmlFor="" className="text-white">
                  Select Depertment
                </label>
                <Select options={options} />
              </div>
              <div>
                <label htmlFor="" className="text-white">
                  Select Instructors
                </label>
                <Select options={options2} />
              </div>
              <div className="w-full bg-green-600 text-center text-white py-2 rounded cursor-pointer">
                <input type="submit" value="Search" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchCourse;
