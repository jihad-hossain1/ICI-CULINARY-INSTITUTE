import React from 'react';
import Swal from 'sweetalert2';
import PageTitle from '../../../components/pageTitle/PageTitle';

const AddInstructor = () => {
    const hostUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB
    }`;
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const details = form.details.value;
      const instructorName = form.instructorName.value;
      
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
              
              email,
              instructorName,
              image: imgUrl,
              details,
            };
            fetch(`${import.meta.env.VITE_BASE_URL}/instructor`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newItem),
            }).then((data) => {
                console.log(data);
              if (data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Instructor Added",
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
        <PageTitle subHeading={``} heading={`Add Instructor Here`}></PageTitle>
        <form onSubmit={handleSubmit}>
                
          <div className="relative z-0 w-full mb-6 group ">
            <input
              type="email"
              name="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer "
              placeholder=" "
              required
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
              type="text"
              name="details"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer "
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Instructor Description
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
            <input
              type="submit"
              className="block py-2.5 px-0 w-full text-md hover:text-lg hover:font-semibold text-gray-900 bg-transparent border hover:border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer cursor-pointer"
              placeholder=" "
              value="Add Instructor"
            />
          </div>
        </form>
      </div>
    );
};

export default AddInstructor;