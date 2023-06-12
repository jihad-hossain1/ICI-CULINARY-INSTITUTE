import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
// import { updateStatus } from "../../api/utils";
// import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ classPrice }) => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  console.log(user);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(classPrice)
    axiosSecure.post(`/create-payment-intent`, { classPrice }).then((res) => {
      console.log(res);
      // setClientSecret();
      // setClientSecret(res.data.clientSecret);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    console.log("CAaaaaard", card);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "anonymous",
          },
        },
      });

    // payment error handle
    if (confirmError) {
      console.log("[error]", confirmError);
      setCardError(error.message);
    }
    else {
      if (paymentIntent.status === "succeeded") {
        const paymentInfo = {
          ...bookingPayment,
          traansactionId: paymentIntent.id,
          date: new Date(),
        };
        console.log(paymentInfo);

        // axiosSecure.post("/bookings", paymentInfo).then((res) => {
        //   console.log(res.data);
        //   updateStatus(paymentInfo.menuItemId, true).then((data) => {
        //     console.log(data);
        //     const text = `Booking successfull, TransactionId: ${paymentIntent.id}`;
        //     toast.success(text);
        //     navigate("/dashboard/student");
        //   });
        // });
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-2/4 lg:w-4/12 mx-auto">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="w-2/4 text-center mx-auto mt-4">
          <button
            className="rounded border w-full"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && (
        <p className="text-red-500 text-center mt-5">{cardError}</p>
      )}
    </>
  );
};

export default CheckoutForm;
