"use client";

import React from "react";
import useSWR from "swr";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import LoadingSpinner from "../shared/LoadingSpinner";
import { generateEventColor } from "../../utils/eventColor";

export default function EventCalendar() {
  const { data: events, isLoading, error } = useSWR("/api/schedule");

  if (isLoading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  const newArray = events.map((item, index) => {
    const monthlyEvents = item.events;

    const allMonthlyEvents = monthlyEvents.map((event, idx) => {
      const { eventName, eventType, eventDateTime } = event;
      const startDate = eventDateTime.toLocaleString();
      const endDate = startDate;
      //const eventTime = eventDateTime.split("T")[1].split(".")[0];

      return {
        title: eventName,
        start: startDate,
        end: endDate,
        color: generateEventColor(eventType),
      };
    });

    return allMonthlyEvents;
  });

  let newNewArray = [];
  for (let i = 0; i < newArray.length; i++) {
    newNewArray = [...newNewArray, ...newArray[i]];
  }

  function renderEventContent(eventInfo) {
    // backgroundColor 할 순 있는데 잘 안됨
    // FullCalendar가 renderEventcontent를 잘 인식하지 않는걸로 보임
    return (
      <div className={`flex z-50`}>
        <p>{eventInfo.event.title}</p>
        <p>{eventInfo.timeText}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        dayMaxEvents={true}
        events={newNewArray}
        editable={true}
      />
    </div>
  );
}
