"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// This values are the props in the UI

const SECRET_KEY = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

export default function PayPalButton() {
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
          onError={(err) => {
            // Handle error scenario here
            console.error("PayPal Error:", err);
            alert("An error occurred during the PayPal transaction.");
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}
