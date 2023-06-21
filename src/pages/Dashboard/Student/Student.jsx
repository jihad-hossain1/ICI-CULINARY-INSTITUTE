// import React from "react";
// import StudentCard from "./StudentCard";
// import { useQuery } from "@tanstack/react-query";
// import Swal from "sweetalert2";
// import useCart from "../../../hook/useCart";

// const Student = () => {
//   const [cart, refetch] = useCart();
//   console.log(cart);
//   const total = cart.reduce((sum, item) => item.price + sum, 0);
//   // const { data: studentDashboard = [], refetch } = useQuery({
//   //   queryKey: ["student"],
//   //   queryFn: async () => {
//   //     const res = await fetch(`${import.meta.env.VITE_BASE_URL}/student`);
//   //     return res.json();
//   //   },
//   // });
//   const handleDelete = (studentItem) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`${import.meta.env.VITE_BASE_URL}/student/${studentItem._id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.deletedCount > 0) {
//               refetch();
//               Swal.fire("Deleted!", "Your file has been deleted.", "success");
//             }
//           });
//       }
//     });
//   };
//   console.log(studentDashboard);
//   return (
//     <div>
//       <div>
//         {studentDashboard.map((studentItem) => (
//           <StudentCard
//             key={studentItem._id}
//             studentItem={studentItem}
//             handleDelete={handleDelete}
//           ></StudentCard>
//         ))}
//       </div>
//       <div></div>
//     </div>
//   );
// };

// export default Student;
