import React from "react";
import PageTitle from "../../components/shared/PageTitle";
import ClubDescription from "../../components/Home/ClubDescription";

export const metadata = {
  title: {
    default: "About",
    template: "SIS Community Service Club | %s",
  },
  description: "About SIS CSC: Club Description",
};

export default function AboutPage() {
  return (
    <section className="flex flex-col px-10 xl:px-5 h-full">
      <PageTitle title="About Us" />
      <div className="my-5 flex justify-center">
        <ClubDescription />
      </div>
    </section>
  );
}
