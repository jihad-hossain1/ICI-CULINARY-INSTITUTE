import React, { useContext } from "react";
import PageTitle from "../../../components/pageTitle/PageTitle";
import Swal from "sweetalert2";
import { Input } from "antd";
import { AuthContext } from "../../../provider/AuthProvider";
const { TextArea } = Input;

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const hostUrl = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGBB
  }`;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const details = form.details.value;
    const duration = form.duration.value;
    const campus = form.campus.value;
    const category = form.category.value;
    const instructorName = form.instructorName.value;
    const seats = form.seats.value;
    const price = form.price.value;
    const image = form.image.files[0];

    const formData = new FormData();
    formData.append("image", image);

    fetch(hostUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          const newItem = {
            name,
            price: parseFloat(price),
            email,
            instructorName,
            image: imgUrl,
            seats: parseFloat(seats),
            details,
            category,
            campus,
            duration,
          };
          fetch(`${import.meta.env.VITE_BASE_URL}/class`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newItem),
          }).then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
          console.log(newItem);
        }
      });
  };
  return (
    <div className="mt-10">
      <PageTitle subHeading={``} heading={`Add Class Here`}></PageTitle>
      <form onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6 group ">
          <input
            type="text"
            name="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer "
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Class Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group ">
          <input
            type="email"
            name="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer "
            placeholder=" "
            required
            defaultValue={user.email}
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Instructor Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group ">
          <input
            type="text"
            name="instructorName"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer "
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Instructor Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group ">
          <input
            type="number"
            name="seats"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer "
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Available seats
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group ">
          <input
            type="number"
            name="price"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer "
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Class Price
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group ">
          <input
            name="image"
            type="file"
            className="block mb-2 text-sm "
            accept="image/*"
            required
          />
        </div>
        <div className="relative z-0 w-full mb-6 group ">
          <TextArea name="details" rows={4} placeholder="Description" />
          <br />
        </div>
        <div className="flex space-x-2 relative z-0 w-full mb-6 group ">
          <div>
            <select name="category" className="border px-2 py-4 rounded">
              <option disabled selected>
                Select Category
              </option>
              <option value="food">food</option>
              <option value="drinks">Drinks</option>
              <option value="softDrinks">Soft Drinks</option>
            </select>
          </div>
          <div>
            <select name="campus" className="border px-2 py-4 rounded">
              <option disabled selected>
                Select Campus
              </option>
              <option value="Dhaka">food</option>
              <option value="Khulna">Drinks</option>
              <option value="Online">Soft Drinks</option>
            </select>
          </div>
          <div>
            <select name="duration" className="border px-2 py-4 rounded">
              <option disabled selected>
                Select Duration
              </option>
              <option value="twoMonth">food</option>
              <option value="threeMont">Drinks</option>
              <option value="sixMonth">Soft Drinks</option>
            </select>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group ">
          <input
            type="submit"
            className="block py-2.5 px-0 w-full text-md hover:text-lg hover:font-semibold text-gray-900 bg-transparent border hover:border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer cursor-pointer"
            placeholder=" "
            value="Add Class"
          />
        </div>
      </form>
    </div>
  );
};

export default AddClass;
