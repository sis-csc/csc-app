"use client";
import useSWR from "swr";

export default function MembersGrid() {
  // swr
  const { data: members, isLoading, error } = useSWR("/api/members");

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="w-full py-10">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members &&
          members.map((member) => (
            <li key={member.id}>
              <p>{member.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
