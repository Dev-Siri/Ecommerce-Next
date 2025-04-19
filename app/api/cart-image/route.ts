import { urlFor } from "@/lib/client";

export const POST = async (request: Request) => {
  const imageSource = await request.json();

  if (!imageSource) return new Response("Image source not provided", { status: 400 });

  const imageURL = urlFor(imageSource).url();

  return new Response(imageURL);
};
