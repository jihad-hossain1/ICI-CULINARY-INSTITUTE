import { useQuery } from "@tanstack/react-query";
import React from "react";

import { FaUserGraduate } from "react-icons/fa";
import { FcPortraitMode } from "react-icons/fc";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users`);
    return res.json();
  });

  const handleDelete = (user) => {
    console.log("ops!  delete ?", user);
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
        fetch(`${import.meta.env.VITE_BASE_URL}/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your user has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleMakeInstructor = (user) => {
    // console.log(_id);
    fetch(`${import.meta.env.VITE_BASE_URL}/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is now Instructor`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeAdmin = (user) => {
    // console.log(_id);
    fetch(`${import.meta.env.VITE_BASE_URL}/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is now Admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <h4 className="text-center font-semibold text-3xl">
        Total Users: <span className="ml-2 font-light"> {users.length}</span>
      </h4>
      <div className="overflow-x-auto shadow-md">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Email</th>
              <th>Role</th>
              <th>Details</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id} className="">
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center ">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.image} alt="Avatar" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-semibold">{user?.name}</div>
                  <div>{user?.email}</div>
                </td>
                <td className="flex space-x-2 items-center">
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button onClick={() => handleMakeInstructor(user)}>
                      <FcPortraitMode
                        className="text-4xl border rounded p-1 hover:shadow-md transition"
                        title={user?.role ? user?.role : "Set User role"}
                      ></FcPortraitMode>
                    </button>
                  )}
                  {user.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <button onClick={() => handleMakeAdmin(user)}>
                      <FaUserGraduate
                        className="text-4xl border rounded p-1 hover:shadow-md transition"
                        title={user?.role ? user?.role : "Set User role"}
                      ></FaUserGraduate>
                    </button>
                  )}
                </td>
                <td>user bio</td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="border border-red-600 px-1 rounded"
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

export default AllUsers;
