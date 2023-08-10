import EventCard from "../../../components/Event/EventCard";
import LinkButton from "../../../components/Event/LinkButton";
import PageTitle from "../../../components/shared/PageTitle";
import React from "react";

export default function Inschool() {
  return (
    <section className="flex flex-col px-10 xl:px-5 h-full mb-5">
      <PageTitle title="In-School Activities" />
      <div className="flex justify-center py-3">
        <EventCard eventName="inschool" />
      </div>
      <div className="flex flex-col items-center bg-gray-200 p-4">
        <div className="mb-4 text-center">
          Helping Faculty - Request & Application Forms
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center w-60 h-20 bg-yellow-300 m-1">
            <LinkButton link="www.google.com" newpage="Faculty Request Form" />
          </div>
          <div className="flex justify-center w-60 h-20 bg-blue-300 m-1">
            <LinkButton
              link="www.google.com"
              newpage="Student Application Form"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
