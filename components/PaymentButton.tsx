"use client";
import type { FC } from "react";

import useStore from "@/store";

const PaymentButton: FC = () => {
  const { cartItems } = useStore();

  const handleCheckout = async () => {
    const { default: getStripe } = await import("@/lib/getStripe");
    const { toast } = await import("react-hot-toast");

    const stripe = await getStripe();

    if (!stripe) return;

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.status === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data?.id });
  };

  return (
    <button type="button" className="btn" onClick={handleCheckout}>
      Pay With Stripe
    </button>
  );
};

export default PaymentButton;
