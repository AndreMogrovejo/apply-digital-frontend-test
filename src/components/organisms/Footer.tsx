import React from "react";
import Link from "next/link";
import ApplyDigitalLogo from "images/applyDigitalLogo.svg";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => (
  <section className="flex justify-center items-center bg-gray-dark h-[180px]">
    <Link href="/">
      <ApplyDigitalLogo />
    </Link>
  </section>
);

export default Footer;
