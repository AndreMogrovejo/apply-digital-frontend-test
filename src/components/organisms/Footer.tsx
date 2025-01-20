import React from "react";
import ApplyDigitalLogo from "images/applyDigitalLogo.svg";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => (
  <section className="flex justify-center items-center bg-gray-dark h-[180px]">
    <ApplyDigitalLogo />
  </section>
);

export default Footer;
