"use client";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

// This values are the props in the UI

const SECRET_KEY = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

export default function PayPalButton() {
  // const onError = (err) => {
  //   console.error("PayPal Error:", err);
  //   // Handle the error as needed
  // };
  return (
    <div>
      <PayPalScriptProvider
        options={{
          "client-id": SECRET_KEY || "",
          components: "buttons",
          currency: "USD",
        }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "13.99",
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            if (actions.order) {
              return actions.order.capture().then(function (details) {
                alert(
                  "Transaction completed by " + details.payer.name?.given_name
                );
              });
            }
            return Promise.resolve();
          }}
          //TODO: onDecline
          //TODO: onError
        />
      </PayPalScriptProvider>
    </div>
  );
}
