"use client";
import useSWR from "swr";
import MembersGridItem from "./MembersGridItem";
import LoadingSpinner from "../shared/LoadingSpinner";

export default function MembersGrid() {
  // swr
  const { data: members, isLoading, error } = useSWR("/api/members");

  if (isLoading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="w-full pt-5 pb-10 max-w-[250px] sm:max-w-full">
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {members &&
          members.map(({ id, name, email, role, photo }) => (
            <li key={id}>
              <MembersGridItem
                name={name}
                email={email}
                role={role}
                photo={photo}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
