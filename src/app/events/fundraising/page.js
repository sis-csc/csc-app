// CSR: Client Side Rendering

import PageTitle from "../../../components/shared/PageTitle";
import React from "react";
import LinkButton from "../../../components/Event/LinkButton";
import EventCard from "../../../components/Event/EventCard";

export const metadata = {
  title: "Fundraising",

  description: "Fundraising Description and Link for SIS CSC",
};

export default function Fundraising() {
  return (
    <section className="flex flex-col px-10 xl:px-5 h-full mb-5">
      <PageTitle title="Fundraising" />
      <div className="flex justify-center py-3">
        <EventCard eventName="fundraising" />
      </div>
      <div className="flex justify-center p-1">
        <LinkButton eventName="fundraising" />
      </div>
    </section>
  );
}
