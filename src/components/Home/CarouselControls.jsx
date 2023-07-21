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
          "bg-indigo-200": !canScrollPrev,
          "bg-indigo-400": canScrollPrev,
        })}
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
          "bg-indigo-200": !canScrollNext,
          "bg-indigo-400": canScrollNext,
        })}
      >
        Next
      </button>
    </div>
  );
}
