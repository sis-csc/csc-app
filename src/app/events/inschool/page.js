import EventCard from "../../../components/Event/EventCard";
import LinkButton from "../../../components/Event/LinkButton";
import PageTitle from "../../../components/shared/PageTitle";
import React from "react";

// CSR: Client Side Rendering

export const metadata = {
  title: "In School Activities",
  description:
    "In School Activities Description and Application Link for SIS CSC",
};

export default function Inschool() {
  return (
    <section className="flex flex-col items-center px-10 xl:px-5 h-full mb-5">
      <div className="flex w-full justfiy-start">
        <PageTitle title="In-School Activities" />
      </div>

      <div className="flex justify-center py-3">
        <EventCard eventName="inschool" />
      </div>
      <div className="w-60 h-20 flex justify-center bg-yellow-300 m-1">
        <LinkButton eventName="inschool" />
      </div>
    </section>
  );
}
