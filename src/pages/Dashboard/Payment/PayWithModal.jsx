import { useLoaderData } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckoutForm from "../../../components/paymentCompo/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
  const stripePromise = loadStripe(
    `${import.meta.env.VITE_Payment_Getway_Key}`
  );
const PayWithModal = () => {
  const bookingPayment = useLoaderData();
  const { classPrice } = bookingPayment;

  console.log(bookingPayment);
  return (
    <div>
      <h4 className="text-center mb-20">
        Enrolled Class Price: ${bookingPayment.classPrice}
      </h4>
      <Elements stripe={stripePromise}>
        <CheckoutForm classPrice={classPrice}> </CheckoutForm>
      </Elements>
    </div>
  );
};

export default PayWithModal;
