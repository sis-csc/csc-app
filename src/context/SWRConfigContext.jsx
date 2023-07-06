"use client";
// SWR의 fetcher 설정을 위한 Global Context

import { SWRConfig } from "swr";

export default function SWRConfigContext({ children }) {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => fetch(url).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
}
