import React from "react";
import PageTitle from "@/components/shared/PageTitle";
import EventCalendar from "@/components/Schedule/EventCalendar";

export default function SchedulePage() {
  return (
    <section className="flex flex-col px-10 xl:px-5 h-full">
      <PageTitle title="Schedule" />
      <div>
        <EventCalendar />
      </div>
    </section>
  );
}
