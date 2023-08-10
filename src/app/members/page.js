// ISR: regenerate page in every two weeks

import MembersGrid from "../../components/Members/MembersGrid";
import React from "react";
import PageTitle from "../../components/shared/PageTitle";
import { archivo } from "../../utils/fonts/fonts";
import { getAllMembers } from "../../services/member";
import { twoWeeks } from "@/utils/revalidateConstants";

export const revalidate = twoWeeks;

export default async function MembersPage() {
  const members = await getAllMembers();

  return (
    <section className="flex flex-col px-10 xl:px-5 h-full">
      <PageTitle title="Members" />
      <div className={`h-full flex justify-center`}>
        <MembersGrid members={members} />
      </div>
    </section>
  );
}
