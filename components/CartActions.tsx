"use client";
import type { CartActionsProps } from "@/types";
import type { FC } from "react";

import useStore from "@/store";

const CartActions: FC<CartActionsProps> = ({ product }) => {
  const { qty, onAdd } = useStore();

  const handleBuyNow = async () => {
    await onAdd(qty, product);

    useStore.setState({ showCart: true });
  };

  return (
    <>
      <button type="button" className="add-to-cart" onClick={() => onAdd(qty, product)}>
        Add to Cart
      </button>
      <button type="button" className="buy-now" onClick={handleBuyNow}>
        Buy Now
      </button>
    </>
  );
};

export default CartActions;
