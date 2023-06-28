import Image from "next/image";
import React from "react";

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
        <div>
          <h1>SIS Community Service Club</h1>
        </div>
        <div>
          <h1>Address</h1>
          <h1>email</h1>
        </div>
        <div>
          {/* Image태그의 src는 public folder안에 넣은 파일을 바로 "/파일이름"으로 접근 */}
          <Image
            src="/school.png"
            className="object-cover"
            alt="school logo"
            width={50}
            height={50}
          />
          <h1>School Logo + Name</h1>
        </div>
        <div>
          <h1>CopyRight</h1>
        </div>
      </div>

      <div>
        <div>
          <h1>Instagram Link</h1>
        </div>
        <div>
          <h1>Club Logo</h1>
        </div>
      </div>
    </div>
  );
}
