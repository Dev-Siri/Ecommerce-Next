"use client";
import { useEffect, type FC, type PropsWithChildren } from "react";

import useStore from "@/store";

const SuccessWrapper: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const resetState = async () => {
      const { runFireworks } = await import("@/lib/utils");

      localStorage.clear();
      useStore.setState({
        cartItems: [],
        totalPrice: 0,
        totalQuantities: 0,
      });
      await runFireworks();
    };

    resetState();
  }, []);

  return <section className="success-wrapper">{children}</section>;
};

export default SuccessWrapper;
