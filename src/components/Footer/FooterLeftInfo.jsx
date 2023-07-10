import React from "react";
import { AiFillMail } from "react-icons/ai";
import { FaSchool } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const footerComponents = [
  {
    icon: <MdLocationOn size={20} />,
    text: `15, Seongnam-daero 1518 beon-gil, Sujeong-gu, Seongnam-si,
      Gyeonggi-do, South Korea 13113`,
  },
  {
    icon: <AiFillMail size={20} />,
    text: `seohyun.park25@stu.siskorea.org`,
  },
  {
    icon: <FaSchool size={20} />,
    text: `Seoul International School`,
  },
];

export default function FooterLeftInfo() {
  return (
    <ul className="flex flex-col justify-center">
      {footerComponents.map(({ icon, text }, index) => (
        <li key={index} className="flex items-center ml-[10px] p-1">
          {icon}
          <p className="ml-[10px] text-md md:text-lg ">{text}</p>
        </li>
      ))}
    </ul>
  );
}
