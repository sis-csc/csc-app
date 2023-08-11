export default function ClubDescription({ description }) {
  return (
    <div className="bg-black p-4 w-screen mx-auto">
      <h1 className="text-orange-500 text-xl md:text-2xl font-bold">
        What does Community Service Club do?
      </h1>
      <div className="text-sm md:text-base text-white">{description}</div>
    </div>
  );
}
