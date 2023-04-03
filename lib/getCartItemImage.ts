import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const BASE_URL = `http${process.env.NODE_ENV === "development" ? "" : "s"}://${
  process.env.NODE_ENV === "development" ? "localhost:3000" : "phoenix-stores.vercel.app"
}`;

const getCartItemImage = async (imageSource: SanityImageSource) => {
  const response = await fetch(`${BASE_URL}/api/cart-image`, {
    method: "POST",
    body: JSON.stringify(imageSource),
  });

  const image = await response.text();

  return image;
};

export default getCartItemImage;
