import PageTitle from "../../../components/shared/PageTitle";
import React from "react";
import LinkButton from "../../../components/Event/LinkButton";
import EventCard from "../../../components/Event/EventCard";

export const metadata = {
  title: {
    default: "Fundraising",
    template: "SIS Community Service Club | %s",
  },
  description: "Fundraising Description and Link for SIS CSC",
};

export default function Fundraising() {
  return (
    <section className="flex flex-col px-10 xl:px-5 h-full">
      <PageTitle title="Fundraising" />
      <div className="flex justify-center p-3">
        <EventCard eventName="fundraising" />
      </div>
      <div className="flex bg-yellow-200 p-1">
        <LinkButton eventName="fundraising"/>
      </div>     
    </section>
  );
}