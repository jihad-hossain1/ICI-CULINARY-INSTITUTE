import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckoutForm from "../../../components/paymentCompo/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  const stripePromise = loadStripe(
    `${import.meta.env.VITE_Payment_Getway_Key}`
  );
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm> </CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
