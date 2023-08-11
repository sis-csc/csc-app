import AchievementsItem from "./AchievementsItem";

export default function Achievements({ achievements }) {
  return (
    <div className="bg-gray-100 p-4 w-screen mx-auto ">
      <h1 className="text-black text-2xl font-bold mb-3">Achievements</h1>
      {achievements.map(({ title, photo, description }, index) => (
        <div key={index} className="border-b-4 border-orange-500 mb-3">
          <AchievementsItem
            title={title}
            photo={photo}
            description={description}
          />
        </div>
      ))}
    </div>
  );
}
