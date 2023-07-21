// www.blog.com = www.blog.com/
// www.blog.com/about

import HomeCarousel from "@/components/Home/HomeCarousel";

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
        <h1>Club Description</h1>
        {/* club description component => styling */}
      </div>

      <div className="w-full flex justify-center">
        <h1>Join Button</h1>
        {/* Link Button => styling  */}
      </div>

      <div className="w-full bg-green-100">
        <h1>Achievements</h1>
      </div>
    </section>
  );
}
