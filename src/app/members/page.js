import MembersGrid from "@/components/Members/MembersGrid";
import React from "react";

export default function MembersPage() {
  return (
    <section className="flex flex-col px-10 xl:px-5 h-full">
      <p className="text-3xl font-extrabold">Members</p>
      <div className="h-full flex justify-center">
        <MembersGrid />
      </div>
    </section>
  );
}
