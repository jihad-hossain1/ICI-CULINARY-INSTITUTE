import React from "react";
// import useCart from "../../../hook/useCart";
import { Link } from "react-router-dom";
import StudentCard from "./StudentCard";
import MyCartCard from "./MyCartCard";
import useCart from "../../../Hook/useCart";

const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
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
        fetch(`${import.meta.env.VITE_BASE_URL}/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <>
      <div className="uppercase flex justify-evenly h-[60px] items-center">
        <h3 className="px-3">
          Total Item <span className="font-bold">{cart.length}</span>
        </h3>
        <h3 className="px-3">Total Price ${total}</h3>
        <Link to={`/isDashboard/payment`}>
          <button className="btn btn-sm btn-primary">PAY</button>
        </Link>
      </div>
      <div>
        {cart.map((item, index) => (
          <MyCartCard
            item={item}
            index={index}
            key={item._id}
            handleDelete={handleDelete}
          ></MyCartCard>
        ))}
      </div>
    </>
  );
};

export default MyCart;
