import Image from "next/image";
import React from "react";
import { AiFillMail } from "react-icons/ai";
import { FaSchool } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function FooterLeft() {
  return (
    <div>
      <div className="flex items-center">
        <Image
          src="/club_logo.png"
          className="object-cover"
          alt="club logo"
          width={100}
          height={100}
        />
        <h1 className="font-[24px] ml-[10px]">SIS Community Service Club</h1>
      </div>

      <div className="flex items-center ml-[10px]">
        <MdLocationOn size={20} />
        <h1 className="ml-[10px]">
          15, Seongnam-daero 1518 beon-gil, Sujeong-gu, Seongnam-si,
          Gyeonggi-do, South Korea 13113
        </h1>
      </div>

      <div className="flex items-center ml-[10px]">
        <AiFillMail size={20} />
        <h1 style={{ marginLeft: "10px" }}>seohyun.park25@stu.siskorea.org</h1>
      </div>

      <div className="flex items-center ml-[10px]">
        {/* Image태그의 src는 public folder안에 넣은 파일을 바로 "/파일이름"으로 접근 */}
        <FaSchool size={20} />
        <h1 className="ml-[10px]">Seoul International School</h1>
      </div>
      {/* new Date().getFullYear() */}
      <div className="ml-[10px]">
        <h1 className="text-gray-500">
          {`SIS Community Service Club - Copyright ${new Date().getFullYear()}`}
        </h1>
      </div>
    </div>
  );
}
