// Footer
// 0. Website Name + Contact Info
// 1. Instagram Link
// 2. School Logo + Name
// 3. Copyright text

import React from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

export default function Footer() {
  return (
    <div
      className="flex flex-col md:flex-row md:justify-between 
      items-center p-7 bg-black text-white"
    >
      <FooterLeft />
      <FooterRight />
    </div>
  );
}
