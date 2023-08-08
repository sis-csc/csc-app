"use client";

import React from "react";
import classNames from "classnames";

export default function CarouselControls({
  canScrollNext,
  canScrollPrev,
  onNext,
  onPrev,
}) {
  return (
    <div className="flex justify-end gap-2 ">
      <button
        onClick={() => {
          if (canScrollPrev) {
            onPrev();
          }
        }}
        disabled={!canScrollPrev}
        className={classNames({
          "px-4 py-2 text-white rounded-md": true,
          "bg-orange-200": !canScrollPrev,
          "bg-orange-400": canScrollPrev,
        })}
        style={{
          transition: "background-color 0.3s ease",
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (canScrollNext) {
            onNext();
          }
        }}
        disabled={!canScrollNext}
        className={classNames({
          "px-4 py-2 text-white rounded-md": true,
          "bg-orange-200": !canScrollNext,
          "bg-orange-400": canScrollNext,
        })}
        style={{
          transition: "background-color 0.3s ease",
        }}
      >
        Next
      </button>
    </div>
  );
}
