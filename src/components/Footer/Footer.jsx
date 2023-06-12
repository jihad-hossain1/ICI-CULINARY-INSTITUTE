import React from "react";
import Container from "../container/Container";
import logo from "../../assets/logow.png";
const Footer = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-5">
        {/* column 1 */}
        <div className="">
          <h4 className="text-white text-xl font-bold border-green-600 border-b-2 py-2">
            International Culinary <br /> Institute
          </h4>
          {/* TODO: image color white korte hobe  */}
          <img src={logo} className="object-cover w-2/4 " alt="" />
        </div>
        {/* column 2 */}
        <div className="">
          <h4 className="text-white text-xl font-bold border-green-600 border-b-2 py-2">
            Our Courses
          </h4>
          <ul className="text-gray-500 text-lg space-y-2">
            <li className="mt-3">SQA Professional Chef Course Level-1</li>
            <li>SQA-Professional Chef Course Level-2</li>
            <li>Diploma in Global Culinary Arts</li>
            <li>Bakery, Pastry & Patisserie Advanced Course</li>
          </ul>
        </div>
        {/* column 3 */}
        <div className="">
          <h4 className="text-white text-xl font-bold border-green-600 border-b-2 py-2">
            Our Branches
          </h4>
          <ul className="text-gray-500 text-lg space-y-2">
            <li className="mt-3">
              Dhaka Branch House: 7/9A, Block: D, Lalmatia, Dhaka- 1207
            </li>
            <li>
              Chattogram Branch Flat 6A, Level 5, Luxury Heights 2092 Zakir
              Hossain Road by Lane Khulshi, Chattogram. +880 xxxx-xxxx
            </li>
            <li>
              Sylhet Branch House #3, Block #C, Main Road, Upashahar, Sylhet,
              Bangladesh +880 xxxxx-xxxxxx
            </li>
          </ul>
        </div>
        {/* column 4 */}
        <div className="">
          <h4 className="text-white text-xl font-bold border-green-600 border-b-2 py-2">
            Contact with us
          </h4>
          <ul className="text-gray-500 text-lg space-y-2 list-disc">
            <li className="mt-3">+880 xxxxx-xxxxx</li>
            <li>abcabc@ici.edu.bd</li>
            <li>House: 7/9A, Block : D , Lalmatia, Dhaka-1207</li>
          </ul>
        </div>
      </div>
      <div className="text-center pb-7">
        <p className="text-sm text-gray-500">
          all right ruls & regulatory by &copy; P.Hero Team.
        </p>
      </div>
    </Container>
  );
};

export default Footer;
