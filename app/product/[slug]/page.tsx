import { groq } from "next-sanity";
import lazy from "next/dynamic";

import type { GenerateMetadata, GenerateStaticParams, PageComponent, Product as ProductType } from "@/types";

import { client, urlFor } from "@/lib/client";

import Product from "@/components/Product";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from "react-icons/ai";

const ProductQuantityCounter = lazy(() => import("@/components/ProductQuantityCounter"));
const ProductImagePreview = lazy(() => import("@/components/ProductImagePreview"));
const CartActions = lazy(() => import("@/components/CartActions"));

const getProduct = async (slug?: string): Promise<[ProductType, ProductType[]]> => {
  const oneProductQuery = groq`*[_type == "product" && slug.current == '${slug}'][0]`;
  const allProductQuery = groq`*[_type == "product"]`;

  return await Promise.all([client.fetch(oneProductQuery), client.fetch(allProductQuery)]);
};

export const generateStaticParams: GenerateStaticParams = async () => {
  const [, products] = await getProduct();

  return products.map(({ slug }) => ({
    slug,
  }));
};

export const generateMetadata: GenerateMetadata = async ({ params: { slug } }) => {
  const [{ name = "Default", details, image }] = await getProduct(slug);

  return {
    title: name,
    description: details,
    openGraph: {
      title: name,
      description: details,
      type: "website",
      url: `https://phoenix-stores.vercel.app/product/${slug}`,
      images: urlFor(image && image[0])
        .width(1200)
        .height(630)
        .url(),
    },
  };
};

const ProductInfo: PageComponent = async ({ params: { slug } }) => {
  const [product, products] = await getProduct(slug);

  const { image, name, details, price } = product;

  return (
    <>
      <article className="product-detail-container">
        <ProductImagePreview images={image.map(img => urlFor(img).url())} productName={name} />
        <aside className="product-detail-desc">
          <h1>{name}</h1>
          <section className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </section>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <section className="quantity">
            <h3>Quantity: </h3>
            <p className="quantity-desc">
              <ProductQuantityCounter>
                <AiOutlineMinus />
                <AiOutlinePlus />
              </ProductQuantityCounter>
            </p>
          </section>
          <section className="buttons">
            <CartActions product={product} />
          </section>
        </aside>
      </article>
      <article className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <ul className="maylike-products-container track">
            {products.map(item => (
              <Product product={item} key={item._id} />
            ))}
          </ul>
        </div>
      </article>
    </>
  );
};

export default ProductInfo;
