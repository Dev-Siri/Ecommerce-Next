import lazy from "next/dynamic";

import type { BannerProps } from "@/types";
import type { FC } from "react";

import { urlFor } from "@/lib/client";

const Link = lazy(() => import("next/link"));
const Image = lazy(() => import("next/image"));

const FooterBanner: FC<BannerProps> = ({
  banner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image },
}) => (
  <article className="footer-banner-container banner-desc">
    <section className="left">
      <p>{discount}</p>
      <h3>{largeText1}</h3>
      <h3>{largeText2}</h3>
      <p>{saleTime}</p>
    </section>
    <section className="right">
      <p>{smallText}</p>
      <h3>{midText}</h3>
      <p>{desc}</p>
      <Link href={`/product/${product}`}>{buttonText}</Link>
    </section>
    <Image src={urlFor(image).url()} alt={product} height={500} width={500} className="footer-banner-image" />
  </article>
);

export default FooterBanner;
