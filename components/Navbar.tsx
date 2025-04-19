import lazy from "next/dynamic";

import type { FC } from "react";

import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

const CartWrapper = lazy(() => import("./CartWrapper"));
const Link = lazy(() => import("next/link"));
const Cart = lazy(() => import("./Cart"));

const Navbar: FC = () => (
  <nav className="navbar-container">
    <Link className="logo" href="/">
      Phoenix
    </Link>
    <CartWrapper>
      <AiOutlineShopping />
      <Cart>
        <AiOutlineLeft />
        <AiOutlineShopping size={150} />
        <AiOutlineMinus />
        <AiOutlinePlus />
        <TiDeleteOutline />
      </Cart>
    </CartWrapper>
  </nav>
);

export default Navbar;
