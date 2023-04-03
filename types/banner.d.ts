import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Banner {
  discount: string;
  largeText1: string;
  largeText2: string;
  saleTime: string;
  smallText: string;
  midText: string;
  desc: string;
  product: string;
  buttonText: string;
  image: SanityImageSource[];
}
