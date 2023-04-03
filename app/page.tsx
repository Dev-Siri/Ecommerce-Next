import { groq } from "next-sanity";

import type { Banner, PageComponent, Product as ProductType } from "@/types";

import { client } from "@/lib/client";

import FooterBanner from "@/components/FooterBanner";
import HeroBanner from "@/components/HeroBanner";
import Product from "@/components/Product";

export const dynamic = "force-dynamic";

const getProducts = async (): Promise<[ProductType[], Banner[]]> => {
  const productQuery = groq`*[_type == "product"]`;
  const bannerQuery = groq`*[_type == "banner"]`;

  return await Promise.all([client.fetch(productQuery), client.fetch(bannerQuery)]);
};

const Home: PageComponent = async () => {
  const [products, banner] = await getProducts();

  return (
    <>
      <HeroBanner banner={banner[0]} />
      <article className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </article>
      <article role="list" className="products-container">
        {products.map(product => (
          <Product key={product._id} product={product} />
        ))}
      </article>
      <FooterBanner banner={banner[0]} />
    </>
  );
};

export default Home;
