import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Product {
  name: string;
  details: string;
  _id: string;
  slug: {
    current: string;
  };
  price: number;
  image: SanityImageSource[];
}
