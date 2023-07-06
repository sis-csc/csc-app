import Image from "next/image";
import React from "react";
import { FaInstagramSquare } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { AiFillMail } from 'react-icons/ai'
import { FaSchool } from 'react-icons/fa'


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
      <div>
        <div className="flex items-center">
          <Image
            src="/club_logo.png"
            className="object-cover"
            alt="club logo"
            width={100}
            height={100}
          />
          <h1 style={{ fontSize: '24px', marginLeft: '10px' }}>SIS Community Service Club</h1>
        </div>
        
        <div className="flex items-center" style={{marginLeft: '10px'}}>
          <MdLocationOn size={20}/>
          <h1 style={{marginLeft: '10px'}}>15, Seongnam-daero
            1518 beon-gil, Sujeong-gu,
            Seongnam-si, Gyeonggi-do,
            South Korea 13113
          </h1>
        </div>

        <div className="flex items-center" style={{marginLeft: '10px'}}>
          <AiFillMail size={20}/>
          <h1 style={{marginLeft: '10px'}}>seohyun.park25@stu.siskorea.org</h1>
        </div>

        <div className="flex items-center" style={{marginLeft: '10px'}}>
          {/* Image태그의 src는 public folder안에 넣은 파일을 바로 "/파일이름"으로 접근 */}
          <FaSchool size={20}/>
          <h1 style={{marginLeft: '10px'}}>Seoul International School</h1>
        </div>

        <div style={{marginLeft: '10px'}}>
          <h1 className="text-gray-500">SIS Community Service Club - Copyright 2023</h1>
        </div>
      </div>

      <div>
        <div className="flex items-center">
          <div>
            <a href="https://www.instagram.com/sis_csc/">
              <FaInstagramSquare size={40} color="#e05a00"/>
            </a>
          </div>
          <div className="ml-4">
            <Image
              src="/school.png"
              className="object-cover"
              alt="school logo"
              width={60}
              height={60}
            />
          </div>
          <div className="ml-2">
            <a href="https://www.siskorea.org/#">
              <Image
                src="/siskorea.webp"
                className="object-cover"
                alt="school logo"
                width={90}
                height={90}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
