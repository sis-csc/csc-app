// CSR: Client Side Rendering

import EventCard from "../../../components/Event/EventCard";
import LinkButton from "../../../components/Event/LinkButton";
import PageTitle from "../../../components/shared/PageTitle";
import React from "react";

// EventCard
// LinkButton

export const metadata = {
  title: "Anna's House",
  description: "Anna's House Description and Application Link for SIS CSC",
};

export default function AnnasHouse() {
  return (
    <section className="flex flex-col px-10 xl:px-5 h-full mb-5">
      <PageTitle title="Anna's House" />
      <div className="flex justify-center py-3">
        <EventCard eventName="anna" />
      </div>
      <div className="flex justify-center items-center p-1">
        <LinkButton eventName="anna" />
      </div>
    </section>
  );
}
