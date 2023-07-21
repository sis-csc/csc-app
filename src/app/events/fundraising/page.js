import PageTitle from "@/components/shared/PageTitle";
import React from "react";
import LinkButton from "@/components/Event/LinkButton";
import Description from "@/components/Event/Description";

export default function Fundraising() {
  return (
    <section className="flex flex-col px-10 xl:px-5 h-full">
      <PageTitle title="Fundraising" />
      <div className="flex bg-yellow-200 p-1">
        <LinkButton 
          link="www.google.com" 
          newpage="Google Form"/>
      </div>
      <div className="flex bg-blue-200 p-1">
        <Description />
      </div>
    </section>
  );
}