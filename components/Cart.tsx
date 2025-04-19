"use client";
import lazy from "next/dynamic";

import type { PropsWithChildren } from "@/types";
import { FC } from "react";

import useStore from "@/store";

const PaymentButton = lazy(() => import("@/components/PaymentButton"));
const CartItem = lazy(() => import("./CartItem"));
const Link = lazy(() => import("next/link"));

const Cart: FC<PropsWithChildren> = ({ children }) => {
  const { totalPrice, cartItems, totalQuantities } = useStore();

  return (
    <article className="cart-wrapper">
      <section className="cart-container">
        <button type="button" className="cart-heading" onClick={() => useStore.setState({ showCart: false })}>
          {children[0]}
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>
        {cartItems.length < 1 && (
          <article className="empty-cart">
            {children[1]}
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button type="button" className="btn" onClick={() => useStore.setState({ showCart: false })}>
                Continue shopping
              </button>
            </Link>
          </article>
        )}
        <section className="products-container">
          {cartItems.length >= 1 &&
            cartItems.map((item: any) => (
              <CartItem key={item._id} item={item}>
                {children[2]}
                {children[3]}
                {children[4]}
              </CartItem>
            ))}
        </section>
        {cartItems.length >= 1 && (
          <article className="cart-bottom">
            <section className="total">
              <h3>Subtotal: </h3>
              <h3>${totalPrice}</h3>
            </section>
            <section className="btn-container">
              <PaymentButton />
            </section>
          </article>
        )}
      </section>
    </article>
  );
};

export default Cart;
