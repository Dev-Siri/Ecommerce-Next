"use client";
import lazy from "next/dynamic";
import { useState, type FC } from "react";

import type { ProductImagePreviewProps } from "@/types";

const Image = lazy(() => import("next/image"));

const ProductImagePreview: FC<ProductImagePreviewProps> = ({ images, productName }) => {
  const [index, setIndex] = useState(0);

  return (
    <article>
      <section className="image-container">
        <Image src={images && images[index]} alt={productName} height={400} width={400} className="product-detail-image" />
      </section>
      <section className="small-images-container">
        {images?.map((item, i) => (
          <Image
            key={i}
            src={item}
            alt={`${productName}-preview-${item}`}
            height={70}
            width={70}
            className={`small-image ${i === index && "selected-image"}`}
            onMouseEnter={() => setIndex(i)}
          />
        ))}
      </section>
    </article>
  );
};

export default ProductImagePreview;
