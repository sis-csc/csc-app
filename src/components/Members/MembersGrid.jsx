import MembersGridItem from "./MembersGridItem";

export default function MembersGrid({ members }) {
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
