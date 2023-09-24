"use client";
import lazy from "next/dynamic";
import { use, type FC } from "react";

import type { CartItemProps } from "@/types";

import getCartItemImage from "@/lib/getCartItemImage";
import useStore from "@/store";

const Image = lazy(() => import("next/image"));

const CartItem: FC<CartItemProps> = ({ item, children }) => {
  const imageURL = use(getCartItemImage(item?.image[0]));
  const { toggleCartItemQuantity, onRemove } = useStore();

  return (
    <article className="product" key={item._id}>
      <Image src={imageURL} alt={item.name} height={150} width={180} className="cart-product-image" />
      <aside className="item-desc">
        <section className="flex top">
          <h5>{item.name}</h5>
          <h4>${item.price}</h4>
        </section>
        <section className="flex bottom">
          <div>
            <p className="quantity-desc">
              <span className="minus" onClick={() => toggleCartItemQuantity(item._id, "dec")}>
                {children[0]}
              </span>
              <span className="num">{item.quantity}</span>
              <span className="plus" onClick={() => toggleCartItemQuantity(item._id, "inc")}>
                {children[1]}
              </span>
            </p>
          </div>
          <button type="button" className="remove-item" onClick={() => onRemove(item)}>
            {children[2]}
          </button>
        </section>
      </aside>
    </article>
  );
};

export default CartItem;
