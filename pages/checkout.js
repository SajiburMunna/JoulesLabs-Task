import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/router";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
export default function PreviewPage() {
  const Data = useSelector((state) => state.Alldata);
  const cartno = Data.cartData;
  const router = useRouter();
  const { success, canceled } = router.query;

  useEffect(() => {
    if (success !== undefined || canceled !== undefined) {
      if (success) {
        console.log("Order placed! You will receive an email confirmation.");
      }

      if (canceled) {
        console.log(
          "Order canceled -- continue to shop around and checkout when you’re ready."
        );
      }
    }
  }, [success, canceled]);

  return (
    <form action="/api/checkout_sessions" method="POST">
      <div className="text-center">
        <h1 className="bg-indigo-500 font-bold ">
          {cartno.length !== 0 ? "Your Cart" : "Your Cart Empty"}{" "}
        </h1>
        {cartno.map((pd) => (
          <div class="p-6 max-w-sm mx-auto text-center">
            <div className="divide-y divide-gray-700 ">
              <p class="text-xl font-medium  ">{pd.name}</p>
              <p>{pd.description}</p>
            </div>
            
          </div>
        ))}

        <button
          className="mt-2 mb-2 bg-indigo-500 p-2"
          type="submit"
          role="link"
        >
          Checkout
        </button>
      </div>
    </form>
  );
}
