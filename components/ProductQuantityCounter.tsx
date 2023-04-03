"use client";
import type { PropsWithChildren } from "@/types";
import type { FC } from "react";

import useStore from "@/store";

const ProductQuantityCounter: FC<PropsWithChildren> = ({ children }) => {
  const { decQty, qty, incQty } = useStore();

  return (
    <>
      <span className="minus" onClick={decQty}>
        {children[0]}
      </span>
      <span className="num">{qty}</span>
      <span className="plus" onClick={incQty}>
        {children[1]}
      </span>
    </>
  );
};

export default ProductQuantityCounter;
