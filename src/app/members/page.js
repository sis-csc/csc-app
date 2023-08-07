import MembersGrid from "../../components/Members/MembersGrid";
import React from "react";
import PageTitle from "../../components/shared/PageTitle";
import { archivo } from "../../utils/fonts/fonts";

export default function MembersPage() {
  return (
    <section className="flex flex-col px-10 xl:px-5 h-full">
      <PageTitle title="Members" />
      <div className={`${archivo.className} h-full flex justify-center`}>
        <MembersGrid />
      </div>
    </section>
  );
}
