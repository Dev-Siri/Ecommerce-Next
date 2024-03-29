import type { Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

const getStripe = async () => {
  const { loadStripe } = await import("@stripe/stripe-js");

  if (!stripePromise) stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

  return stripePromise;
};

export default getStripe;
