import type { FC } from "react";

import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer: FC = () => (
  <footer className="footer-container">
    <p>2022 Phoenix All Rights Reserved</p>
    <p className="icons">
      <AiFillInstagram />
      <AiOutlineTwitter />
    </p>
  </footer>
);

export default Footer;
