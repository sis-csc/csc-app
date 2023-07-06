import Image from "next/image";
import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";
import { FaSchool } from "react-icons/fa";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

// Footer
// 0. Website Name + Contact Info
// 1. Instagram Link
// 2. School Logo + Name
// 3. Copyright text

// Reference: https://blog.hubspot.com/website/website-footer
// Important Reference: https://ummgc.org/our-pillars

// Image in Next.js: https://nextjs.org/docs/app/api-reference/components/image

export default function Footer() {
  return (
    <div className="flex justify-between items-center">
      <FooterLeft />
      <FooterRight />
    </div>
  );
}
