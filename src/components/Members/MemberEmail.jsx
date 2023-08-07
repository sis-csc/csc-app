import React from "react";
import MailIcon from "../ui/MailIcon";

export default function MemberEmail({ email }) {
  return (
    <div className="mt-3 sm:mt-4 lg:mt-8 flex items-center">
      <MailIcon />
      <div className="ml-1 flex flex-col items-center">
        <p
          className="ml-1 sm:text-[13px] md:text-[14px] lg:text-lg
         pr-2 text-black opacity-70"
        >
          {email}
        </p>

        <div
          className="-translate-y-2 w-full 
        md:border-[0.3px] lg:border-[0.5px]
         border-black border-opacity-60"
        ></div>
      </div>
    </div>
  );
}
