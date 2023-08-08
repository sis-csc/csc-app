import EventCard from "../../../components/Event/EventCard";
import GoogleDocPreview from "../../../components/Event/GoogleDocPreview";
import LinkButton from "../../../components/Event/LinkButton";
import PageTitle from "../../../components/shared/PageTitle";
import React from "react";

// EventCard
// LinkButton
// GoogleDocPreview

export default function AnnasHouse() {
  return (
    <section className="flex flex-col px-10 xl:px-5 h-full">
      <PageTitle title="Anna's House" />
      <div className="flex justify-center p-3">
        <EventCard eventName="anna" />
      </div>
      <div className="flex bg-yellow-200 p-1">
        <LinkButton link="www.google.com" newpage="Google Doc" />
      </div>
      <div className="flex bg-blue-200 p-1">
        <GoogleDocPreview />
      </div>
    </section>
  );
}
