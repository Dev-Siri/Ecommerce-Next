import lazy from "next/dynamic";

import type { PageComponent } from "@/types";

import { BsBagCheckFill } from "react-icons/bs";

const SuccessWrapper = lazy(() => import("@/components/SuccessWrapper"));
const Link = lazy(() => import("next/link"));

const Success: PageComponent = () => (
  <SuccessWrapper>
    <article className="success">
      <BsBagCheckFill className="icon" />
      <h2>Thank you for your order!</h2>
      <p className="email-msg">Check your email inbox for the receipt.</p>
      <p className="description">
        If you have any questions, please email
        <a className="email" href="mailto:s0431668@gmail.com">
          s0431668@gmail.com
        </a>
      </p>
      <Link href="/" style={{ width: 300, textAlign: "center" }} className="btn">
        Continue Shopping
      </Link>
    </article>
  </SuccessWrapper>
);

export default Success;
