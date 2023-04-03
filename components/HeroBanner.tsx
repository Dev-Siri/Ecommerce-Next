import lazy from "next/dynamic";

import type { BannerProps } from "@/types";
import type { FC } from "react";

import { urlFor } from "@/lib/client";

const Image = lazy(() => import("next/image"));
const Link = lazy(() => import("next/link"));

const HeroBanner: FC<BannerProps> = ({ banner }) => (
  <article className="hero-banner-container">
    <p className="beats-solo">{banner.smallText}</p>
    <h3>{banner.midText}</h3>
    <h1>{banner.largeText1}</h1>
    <Image src={urlFor(banner.image).url()} alt="headphones" height={450} width={450} className="hero-banner-image" priority />
    <Link href={`/product/${banner.product.toLowerCase().replace(" ", "-")}`}>
      <button type="button">{banner.buttonText}</button>
    </Link>
    <section className="desc">
      <h5>Description</h5>
      <p>{banner.desc}</p>
    </section>
  </article>
);

export default HeroBanner;
