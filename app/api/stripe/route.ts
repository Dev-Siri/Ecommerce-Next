import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
  typescript: true,
});

export const POST = async (request: Request) => {
  const body = await request.json();

  try {
    const requestOrigin = request.headers.get("origin")!;

    const params: Stripe.Checkout.SessionCreateParams = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      line_items: body.map((item: any) => {
        const img = item.image[0].asset._ref;
        const newImg = img.replace("image-", "https://cdn.sanity.io/images/3qeh07ag/production/").replace("-webp", ".webp");

        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.name,
              images: [newImg],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${requestOrigin}/success`,
      cancel_url: requestOrigin,
    };

    const session = await stripe.checkout.sessions.create(params);

    return new Response(JSON.stringify(session));
  } catch (error: any) {
    return new Response(error.message, {
      status: error.statusCode || 500,
    });
  }
};
