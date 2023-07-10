import React from "react";

export default function CopyrightText() {
  return (
    <h1 className="text-gray-500 text-xs md:text-sm">
      {`SIS Community Service Club - Copyright ${new Date().getFullYear()}`}
    </h1>
  );
}
