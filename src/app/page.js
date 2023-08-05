// www.blog.com = www.blog.com/
// www.blog.com/about

import ClubDescription from "../components/Home/ClubDescription";
import HomeCarousel from "../components/Home/HomeCarousel";
import JoinButton from "../components/Home/JoinButton";
import Achievements from "../components/Home/Achievements"

// Home Page
// 1. Club Description
// 2. Join button
// 3. Achievements - Image, short description

export default function Home() {
  return (
    // flex는 horizontal로 나열
    // flex flex-col은 vertical로 나열
    <section className="flex flex-col items-center justify-center w-full">
      {/* basis-?로 공간을 자동으로 분할 할 수 있음 */}
      <div className="relative w-full flex justify-center ">
        <HomeCarousel />
      </div>

      <div className="mt-24 pt-96 w-full flex justify-center">
        <ClubDescription />
        {/* club description component => styling */}
      </div>

      <div className="mt-10 w-full flex justify-centerw-full bg-green-100">
        <Achievements />
      </div>

      <div className="mt-5 mb-5 w-full flex justify-center">
        <JoinButton />
        {/* Link Button => styling  */}
      </div>
    </section>
  );
}
