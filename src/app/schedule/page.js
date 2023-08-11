// CSR

import React from "react";
import PageTitle from "../../components/shared/PageTitle";
import EventCalendar from "../../components/Schedule/EventCalendar";

export const metadata = {
  title: {
    default: "Schedule",
    template: "SIS Community Service Club | %s", // maybe shorten to SIS CSC?
  },
  description: "Schedule with Upcoming Events of SIS CSC",
};

export default function SchedulePage() {
  return (
    <section className="flex flex-col px-10 xl:px-5 h-full">
      <PageTitle title="Schedule" />
      <div className="my-5">
        <EventCalendar />
      </div>
    </section>
  );
}

// Achievements, Link Button Sanity, Metatdata 설정, custom domain
