import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineRest,
  AiTwotoneEdit,
} from "react-icons/ai";
import { FcPortraitMode } from "react-icons/fc";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const { data: manageClasses = [], refetch } = useQuery(
    ["manageClasses"],
    async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/class`);
      return res.json();
    }
  );

  const handleDelete = (isClass) => {
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
        fetch(`${import.meta.env.VITE_BASE_URL}/class/${isClass._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your Class has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleApprove = (isClass) => {
    // console.log(_id);
    fetch(
      `${import.meta.env.VITE_BASE_URL}/instructor/approve/${isClass._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${isClass.name} is now Approved`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleReject = (isClass) => {
    // console.log(_id);
    fetch(`${import.meta.env.VITE_BASE_URL}/instructor/reject/${isClass._id}`, {
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
            title: `${isClass.name} is rejected`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <h4 className="text-center font-semibold text-3xl">
        Total Classes:{" "}
        <span className="ml-2 font-light"> {manageClasses.length}</span>
      </h4>
      <div className="overflow-x-auto shadow-md">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Email</th>
              <th>Status</th>
              <th>Details</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {manageClasses.map((isClass, index) => (
              <tr key={isClass._id} className="">
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center ">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={isClass.image} alt="Avatar" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-semibold">{isClass?.name}</div>
                  <div>{isClass?.email}</div>
                </td>
                <td className="flex space-x-2 items-center">
                  {isClass.status === "approve" ? (
                    "approve"
                  ) : (
                    <>
                      <button onClick={() => handleReject(isClass)}>
                        <AiOutlineRest
                          className="text-4xl border rounded p-1 text-red-500 hover:shadow-md transition"
                          title={
                            isClass?.status
                              ? isClass?.status
                              : "Set Class status"
                          }
                        ></AiOutlineRest>
                      </button>
                    </>
                  )}
                  {isClass.status === "reject" ? (
                    "reject"
                  ) : (
                    //TODO: ADD FEEDBACK BUTTON
                    <>
                      <button onClick={() => handleApprove(isClass)}>
                        <AiOutlineCheckCircle
                          className="text-4xl border text-green-600 rounded p-1 hover:shadow-md transition"
                          title={
                            isClass?.status
                              ? isClass?.status
                              : "Set Class status"
                          }
                        ></AiOutlineCheckCircle>
                      </button>
                    </>
                  )}
                </td>
                <td>Class details</td>
                <td>
                  <button
                    onClick={() => handleDelete(isClass)}
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

export default ManageClasses;
