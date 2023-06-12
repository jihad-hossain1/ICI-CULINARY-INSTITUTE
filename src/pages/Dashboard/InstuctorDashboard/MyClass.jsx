import { useQuery } from "@tanstack/react-query";
import React from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";

const MyClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: myClass = [], refetch } = useQuery({
    queryKey: ["class"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/class`);
      return res.json();
    },
  });
  const handleDelete = (insClass) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/class/${insClass._id}`)

          .then((data) => {
            console.log(data);
            if (data.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your class has been deleted.", "success");
            }
          });
      }
    });
  };
  const handleUpdate = (insClass) => {
    axiosSecure.put(`/class/${insClass}`).then((data) => {
      console.log(data);
    });
  };
  return (
    <div>
      <h4 className="text-center text-xl font-semibold">
        My Totals Classes
        <span className="ml-2 font-light">{myClass?.length}</span>
      </h4>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myClass.map((insClass, index) => (
              <tr key={insClass._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center ">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={insClass.image} alt="Avatar" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{insClass.name}</td>
                <td>
                  {insClass?.status ? (
                    insClass?.status
                  ) : (
                    <span className="text-red-600 font-semibold">Pending</span>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleUpdate(insClass)}
                    className="btn btn-outline btn-warning btn-xs shadow-md"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(insClass)}
                    className="btn btn-outline btn-warning btn-xs shadow-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
