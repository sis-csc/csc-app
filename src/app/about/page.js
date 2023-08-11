// ISR: regenerate page in every two weeks

import React from "react";
import PageTitle from "../../components/shared/PageTitle";
import ClubDescription from "../../components/Home/ClubDescription";
import { twoWeeks } from "@/utils/revalidateConstants";
import { getClubDescription } from "@/services/home";

export const metadata = {
  title: {
    default: "About",
    template: "SIS Community Service Club | %s",
  },
  description: "About SIS CSC: Club Description",
};

export const revalidate = twoWeeks;

export default async function AboutPage() {
  const description = await getClubDescription();

  return (
    <section className="flex flex-col px-10 xl:px-5 h-full">
      <PageTitle title="About Us" />
      <div className="my-5 flex justify-center">
        <ClubDescription description={description} />
      </div>
    </section>
  );
}
