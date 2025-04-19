"use client";
import type { PropsWithChildren } from "@/types";
import type { FC } from "react";

import useStore from "@/store";

const CartWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { showCart, totalQuantities } = useStore();

  return (
    <>
      <button type="button" className="cart-icon" onClick={() => useStore.setState({ showCart: true })}>
        {children[0]}
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && children[1]}
    </>
  );
};

export default CartWrapper;
