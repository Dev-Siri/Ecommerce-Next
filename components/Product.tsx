import lazy from "next/dynamic";

import type { FC } from "react";
import type { ProductProps } from "@/types";

import { urlFor } from "@/lib/client";

const Link = lazy(() => import("next/link"));
const Image = lazy(() => import("next/image"));

const Product: FC<ProductProps> = ({ product: { image, name, slug, price } }) => (
  <Link href={`/product/${slug.current}`} className="product-card">
    <Image src={urlFor(image && image[0]).url()} alt={slug.current} width={250} height={250} className="product-image" />
    <p className="product-name">{name}</p>
    <p className="product-price">${price}</p>
  </Link>
);

export default Product;
